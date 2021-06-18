using API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class UserDTO
    {
        public string Id { get; set; }
        public ICollection<Deck> Decks { get; set; }
        public string Email { get; set; }
    }
}
