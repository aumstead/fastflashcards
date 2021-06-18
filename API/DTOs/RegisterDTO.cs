using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class RegisterDTO
    {
        [Required(ErrorMessage = "An email address is required.")]
        [EmailAddress(ErrorMessage = "You seem to have entered an invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Your account needs a password!")]
        public string Password { get; set; }
    }
}
