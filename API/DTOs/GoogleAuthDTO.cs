using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class GoogleAuthDTO
    {
        public string Provider { get; set; }
        public string IdToken { get; set; }
    }
}
