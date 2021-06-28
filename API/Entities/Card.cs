using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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
        [Required]
        public int DeckId { get; set; }
        [Required]
        public string AppUserId { get; set; }
    }
}
