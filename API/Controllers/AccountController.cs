using API.DTOs;
using API.Email;
using API.Entities;
using API.Interfaces;
using FluentEmail.Core;
using FluentEmail.Smtp;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
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
        private readonly IEmailService _emailService;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenService tokenService, ILogger<AccountController> logger, IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _logger = logger;
            _emailService = emailService;
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
            // fluent email
            //var sender = new SmtpSender(() => new SmtpClient("localhost")
            //{
            //    EnableSsl = false,
            //    DeliveryMethod = SmtpDeliveryMethod.Network,
            //    Port = 25
            //});

            //FluentEmail.Core.Email.DefaultSender = sender;

            //var email = await FluentEmail.Core.Email
            //    .From("admin@freeflashcards.com")
            //    .To("test@test.com")
            //    .Subject("confirmation email from free flash cards .com")
            //    .Body("click the link nub")
            //    .SendAsync();


            // mailkit code-maze tutorial
            //var message = new EmailMessage(user.Email, "Free flash cards confirmation email.", "Please click the link to verify your email address:" + confirmationLink);
            //try
            //{
            //    _emailService.SendEmail(message);
            //}
            //catch
            //{
            //    var errorResult = StatusCode(StatusCodes.Status500InternalServerError, new { source = "register", type = "send email", message = "There was an error sending the confirmation email." });
            //    return errorResult;
            //}

            _logger.Log(LogLevel.Warning, confirmationLink);

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
    }
}
