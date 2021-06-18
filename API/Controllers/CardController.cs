using API.Data.Repository.IRepository;
using API.DTOs;
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
    public class CardController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;

        public CardController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //[HttpPost]
        //public async Task<IActionResult> CreateCard(CardDTO cardDTO)
        //{
        //    var card = new Card
        //    {
        //        Front = cardDTO.Front,
        //        Back = cardDTO.Back,
        //        DeckId = cardDTO.DeckId
        //    };

        //    await _unitOfWork.Cards.Add(card);

        //    if (await _unitOfWork.Save()) return CreatedAtRoute("GetCard", new { id = card.Id }, card);
        //    return BadRequest();
        //}

        [HttpPost]
        public async Task<IActionResult> CreateCards(CreateCardsDTO createCardsDTO)
        {
            var newCardList = new List<Card>();

            var deck = await _unitOfWork.Decks.GetFirstOrDefault(deck => deck.Id == createCardsDTO.DeckId, "Cards");
            var lastOrder = 0;
            if (deck.Cards.Count > 0)
            {
                var orderedDeck = deck.Cards.OrderBy(card => card.Order);
                var lastCard = orderedDeck.LastOrDefault();
                lastOrder = lastCard.Order;
            }

            foreach (var card in createCardsDTO.Cards)
            {
                lastOrder++;
                var newCard = new Card
                {
                    Front = card.Front,
                    Back = card.Back,
                    Order = lastOrder,
                    DeckId = createCardsDTO.DeckId,
                    AppUserId = createCardsDTO.AppUserId
                };
                newCardList.Add(newCard);
                await _unitOfWork.Cards.Add(newCard);
            }

            if (await _unitOfWork.Save()) return CreatedAtRoute("GetCards", new { deckId = createCardsDTO.DeckId }, newCardList);
            return BadRequest();
        }

        [HttpGet(Name = "GetCard")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetCard([FromQuery] int id)
        {
            var card = await _unitOfWork.Cards.Get(id);
            return Ok(card);
        }

        [HttpGet("{deckId}", Name = "GetCards")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetCards([FromQuery] int deckId)
        {
            var cards = await _unitOfWork.Cards.GetAll(card => card.DeckId == deckId);
            return Ok(cards);
        }

        [HttpPut("{id:int}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateCard(UpdateCardDTO updateCardDTO)
        {
            if (!ModelState.IsValid || updateCardDTO.Id < 1)
            {
                return BadRequest(ModelState);
            }

            var userId = User.GetUserId();

            if (userId != updateCardDTO.AppUserId) return Unauthorized();

            var card = await _unitOfWork.Cards.Get(updateCardDTO.Id);
            if (card == null)
            {
                return BadRequest("Submitted data is invalid.");
            }

            card.Front = updateCardDTO.Front;
            card.Back = updateCardDTO.Back;
            // if deck is changed, order should change so as to be last card in deck
            if (card.DeckId != updateCardDTO.DeckId)
            {
                card.DeckId = updateCardDTO.DeckId;
                var newDeck = await _unitOfWork.Decks.GetFirstOrDefault(deck => deck.Id == updateCardDTO.DeckId, "Cards");
                var orderedDeck = newDeck.Cards.OrderBy(card => card.Order);
                var lastCard = orderedDeck.LastOrDefault();
                card.Order = lastCard.Order + 1;
            }
            else
            {
                card.Order = updateCardDTO.Order;
            }

            _unitOfWork.Cards.Update(card);
            if (await _unitOfWork.Save()) return NoContent();
            return BadRequest();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCard(int id)
        {
            if (id < 1)
            {
                return BadRequest("Error deleting. Invalid ID.");
            }
            var cardFromDb = await _unitOfWork.Cards.Get(id);
            if (cardFromDb == null)
            {
                return BadRequest("Error deleting. Card not found.");
            }

            var userId = User.GetUserId();

            if (userId != cardFromDb.AppUserId) return Unauthorized();

            _unitOfWork.Cards.Remove(cardFromDb);
            if (await _unitOfWork.Save()) return Ok();

            return BadRequest("Error deleting card.");
        }
    }
}
