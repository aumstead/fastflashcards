﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class LoggedInUserDTO
    {
        public string Email { get; set; }
        public string Token { get; set; }
        public string Id { get; set; }
    }
}
