using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize("RequireAdminClaim")]
    public class AdminController : BaseApiController
    {
        [HttpGet]
        public IActionResult TestPolicy()
        {
            return Ok();
        }
    }
}
