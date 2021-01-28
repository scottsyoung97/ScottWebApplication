using Microsoft.AspNetCore.Mvc;
using ScottWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScottWebApplication.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [  HttpGet("FanMail")]
        public IActionResult FanMail ()
        {
            return View();
        }

        [HttpPost("FanMail")]
        public IActionResult FanMail (FanMailModel model)
        {
            return View();
        }
    }
}
