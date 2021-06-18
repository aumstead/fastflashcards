using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Card
    {
        public int Id { get; set; }
        public string Front { get; set; }
        public string Back { get; set; }
        public int Order { get; set; }
        public int DeckId { get; set; }
        public string AppUserId { get; set; }
    }
}
