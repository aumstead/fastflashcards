using API.Data.Repository.IRepository;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize("RequireAdminClaim")]
    public class AdminController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IUnitOfWork _unitOfWork;

        public AdminController(UserManager<AppUser> userManager, IUnitOfWork unitOfWork)
        {
            _userManager = userManager;
            _unitOfWork = unitOfWork;
        }

        //[HttpGet]
        //public IActionResult TestPolicy()
        //{
        //    return Ok();
        //}

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _unitOfWork.Users.GetAll(null, null, "Decks");

            if (users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }

        [HttpGet]
        public async Task<IActionResult> GetUser([FromQuery] string id)
        {
            var user = await _unitOfWork.Users.GetUserWithDecksAndCards(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPut("UpdateEmailConfirmed")]
        public async Task<IActionResult> UpdateEmailConfirmed(bool emailConfirmed, string id)
        {
            var user = await _unitOfWork.Users.GetFirstOrDefault((user) => user.Id == id);

            if (user == null)
            {
                return BadRequest("Error updating. User not found.");
            }

            user.EmailConfirmed = emailConfirmed;

            _unitOfWork.Users.Update(user);
            if (await _unitOfWork.Save()) return NoContent();
            return BadRequest();
        }

        [HttpPut("UpdatePassword")]
        public async Task<IActionResult> UpdatePassword(AdminUpdateUserPasswordDTO adminUpdateUserPasswordDTO)
        {
            var user = await _unitOfWork.Users.GetFirstOrDefault((user) => user.Id == adminUpdateUserPasswordDTO.Id);

            if (user == null)
            {
                return BadRequest("Error updating. User not found.");
            }

            var token = await _userManager.GeneratePasswordResetTokenAsync(user);

            var result = await _userManager.ResetPasswordAsync(user, token, adminUpdateUserPasswordDTO.NewPassword);

            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest(result.Errors);
        }

        [HttpPost("DeleteUser")]
        public async Task<IActionResult> DeleteUser([FromQuery] string id)
        {
            var user = await _unitOfWork.Users.GetFirstOrDefault((user) => user.Id == id);

            if (user == null)
            {
                return BadRequest("Error deleting. User not found.");
            }
            
            var result = await _userManager.DeleteAsync(user);

            if (result.Succeeded)
            {
                return Ok();
            }

            return BadRequest(result.Errors);            
        }
    }
}
