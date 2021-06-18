using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CreateCardsDTO
    {
        public int DeckId { get; set; }
        public string AppUserId { get; set; }
        public IEnumerable<Card> Cards { get; set; }
    }
}
