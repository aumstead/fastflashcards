using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using FluentEmail.Core;
using FluentEmail.Smtp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly ILogger<AccountController> _logger;
        private readonly IFluentEmail _mailer;
        private readonly IMailService _mailService;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService, ILogger<AccountController> logger, IConfiguration config, IFluentEmail mailer, IMailService mailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _logger = logger;
            _mailer = mailer;
            _mailService = mailService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<LoggedInUserDTO>> Register(RegisterDTO registerDTO)
        {
            if (await EmailExists(registerDTO.Email)) return BadRequest(new { type = "email", message = "That email is already in use." });

            var user = new AppUser()
            {
                Email = registerDTO.Email.ToLower(),
                UserName = registerDTO.Email.ToLower()
            };

            var result = _userManager.CreateAsync(user, registerDTO.Password);

            if (!result.Result.Succeeded) return BadRequest(result.Result.Errors);

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";

            var confirmationLink = $"{baseUrl}/register/confirm-email/?userId={user.Id}&token={token}";

            // send email
            try
            {
                _mailService.SendHTMLSendGrid(user.Email, confirmationLink, "Email Verification Link", "Click the button below to verify your email address and login.", "Verify Email Address");
            }
            catch
            {
                var errorResult = StatusCode(StatusCodes.Status500InternalServerError, new { source = "register", type = "send email", message = "There was an error sending the confirmation email." });
                return errorResult;
            }

            return new LoggedInUserDTO { Id = user.Id, Email = user.Email };
        }



        [HttpGet("confirm-email")]
        public async Task<ActionResult<LoggedInUserDTO>> ConfirmEmail(string userId, string token)
        {
            if (userId == null || token == null)
            {
                return BadRequest(new { source = "confirm-email", type = "email not confirmed" });
            }

            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return BadRequest(new { source = "confirm-email", type = "email not confirmed" });
            }

            var decodedToken = token.Replace(" ", "+");

            var result = await _userManager.ConfirmEmailAsync(user, decodedToken);

            if (result.Succeeded)
            {
                return new LoggedInUserDTO { Id = user.Id, Email = user.Email.ToLower(), Token = await _tokenService.CreateToken(user) };
            }

            return Unauthorized(new { source = "confirm-email", type = "email not confirmed" });
        }

        [HttpPost("login")]
        public async Task<ActionResult<LoggedInUserDTO>> Login(LoginDTO loginDTO)
        {
            var user = await _userManager.Users
                .SingleOrDefaultAsync(user => user.Email.ToLower() == loginDTO.Email.ToLower());

            if (user == null) return Unauthorized(new { source = "login", type = "email" });

            if (loginDTO.Password == "" | loginDTO.Password == null) return Unauthorized(new { source = "login", type = "password" });

            if (!user.EmailConfirmed && (await _userManager.CheckPasswordAsync(user, loginDTO.Password)))
            {
                return Unauthorized(new { source = "login", type = "confirm email" });
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

            if (!result.Succeeded) return Unauthorized(new { source = "login", type = "password" });

            return new LoggedInUserDTO { Id = user.Id, Email = user.Email.ToLower(), Token = await _tokenService.CreateToken(user) };
        }

        private async Task<bool> EmailExists(string email)
        {
            return await _userManager.Users.AnyAsync(user => user.Email == email.ToLower());
        }

        [HttpPost("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user != null && await _userManager.IsEmailConfirmedAsync(user))
            {
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);

                var baseUrl = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}";

                var passwordResetLink = $"{baseUrl}/reset-password/?email={email}&token={token}";

                // Send email
                try
                {
                    _mailService.SendHTMLSendGrid(user.Email, passwordResetLink, "Password Reset", "Click the button below to reset your password.", "Reset Password");
                }
                catch
                {
                    var errorResult = StatusCode(StatusCodes.Status500InternalServerError, new { source = "register", type = "send email", message = "There was an error sending the reset password email. Please try again or contact customer support." });
                    return errorResult;
                }
                _logger.Log(LogLevel.Warning, passwordResetLink);
            }
            return Ok();
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword(ResetPasswordDTO resetPasswordDTO)
        {
            var user = await _userManager.FindByEmailAsync(resetPasswordDTO.Email);
            if (user != null)
            {
                var decodedToken = resetPasswordDTO.Token.Replace(" ", "+");

                var result = await _userManager.ResetPasswordAsync(user, decodedToken, resetPasswordDTO.Password);
                if (result.Succeeded)
                {
                    return Ok();
                }
                return BadRequest(result.Errors);
            }
            // to avoid brute force attacks, just send user to reset password confirmation
            return Ok();
        }

        [HttpPost("ChangePassword")]
        [Authorize]
        public async Task<IActionResult> ChangePassword(ChangePasswordDTO changePasswordDTO)
        {

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return BadRequest("Invalid user.");
            }

            // ChangePasswordAsync changes the user password
            var result = await _userManager.ChangePasswordAsync(user,
                changePasswordDTO.CurrentPassword, changePasswordDTO.NewPassword);

            // The new password did not meet the complexity rules or
            // the current password is incorrect.
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            // Upon successfully changing the password, token does not need to be updated. Just return Ok().
            return Ok();
        }

        [HttpPost("DeleteUser")]
        public async Task<IActionResult> DeleteUser(DeleteUserDTO deleteUserDTO)
        {
            var userEmail = User.GetEmail();

            var user = await _userManager.Users
                .SingleOrDefaultAsync(user => user.Email.ToLower() == userEmail.ToLower());

            if (user == null)
            {
                return BadRequest("Invalid user.");
            }

            if (deleteUserDTO.Password == "" | deleteUserDTO.Password == null) return Unauthorized(new { source = "DeleteUser", type = "password" });

            var passwordIsCorrect = await _userManager.CheckPasswordAsync(user, deleteUserDTO.Password);

            if (!passwordIsCorrect)
            {
                return Unauthorized(new { source = "DeleteUser", type = "password" });
            }
            else
            {
                var result = await _userManager.DeleteAsync(user);

                if (result.Succeeded)
                {
                    return Ok();
                }

                return BadRequest(result.Errors);
            }
        }
    }
}
