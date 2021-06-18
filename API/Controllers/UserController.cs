using API.Data.Repository.IRepository;
using API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    public class UserController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet(Name = "GetUser")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetUser([FromQuery] string id)
        {
            var user = await _unitOfWork.Users.GetUserWithDecksAndCards(id);

            if (user == null)
            {
                return NotFound();
            }

            var result = new UserDTO()
            {
                Id = user.Id,
                Email = user.Email,
                Decks = user.Decks
            };

            return Ok(result);
        }
    }
}
