using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Deck
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(40, ErrorMessage = "Cannot exceed 40 characters")]
        public string Name { get; set; }
        public string AppUserId { get; set; }
        public ICollection<Card> Cards { get; set; }
    }
}
