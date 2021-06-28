using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class AdminUpdateUserPasswordDTO
    {
        public string NewPassword { get; set; }
        public string Id { get; set; }
    }
}
