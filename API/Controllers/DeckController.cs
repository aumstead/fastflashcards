using API.Data.Repository.IRepository;
using API.Entities;
using API.Extensions;
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
    public class DeckController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public DeckController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDeck([FromQuery] string deckName)
        {
            var id = User.GetUserId();

            var deck = new Deck
            {
                Name = deckName,
                AppUserId = id
            };

            await _unitOfWork.Decks.Add(deck);

            if (await _unitOfWork.Save()) return CreatedAtRoute("Get", new { id = deck.Id }, deck);
            return BadRequest();
        }

        [HttpGet(Name = "Get")]
        public async Task<IActionResult> Get([FromQuery]int id)
        {
            var deckFromDb = await _unitOfWork.Decks.GetFirstOrDefault(deck => deck.Id == id, "Cards");

            if (deckFromDb == null)
            {
                return NotFound();
            }

            var userId = User.GetUserId();

            if (userId != deckFromDb.AppUserId) return Unauthorized();

            return Ok(deckFromDb);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteDeck(int id)
        {
            if (id < 1)
            {
                return BadRequest("Error deleting. Invalid ID.");
            }
            var deckFromDb = await _unitOfWork.Decks.Get(id);
            if (deckFromDb == null)
            {
                return BadRequest("Error deleting. Deck not found.");
            }

            var userId = User.GetUserId();

            if (userId != deckFromDb.AppUserId) return Unauthorized();

            _unitOfWork.Decks.Remove(deckFromDb);
            if (await _unitOfWork.Save()) return Ok();

            return BadRequest("Error deleting deck.");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateDeckName(string name, int id)
        {
            if (id < 1)
            {
                return BadRequest("Error deleting. Invalid ID.");
            }

            var deckFromDb = await _unitOfWork.Decks.Get(id);
            if (deckFromDb == null)
            {
                return BadRequest("Error deleting. Deck not found.");
            }

            var userId = User.GetUserId();

            if (userId != deckFromDb.AppUserId) return Unauthorized();

            deckFromDb.Name = name;

            _unitOfWork.Decks.Update(deckFromDb);
            if (await _unitOfWork.Save()) return NoContent();
            return BadRequest();
        }
    }
}
