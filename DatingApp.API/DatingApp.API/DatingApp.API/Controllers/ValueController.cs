using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DatingApp.API.Controllers
{
    public class ValueController : Controller
    {
        private readonly DataContext dc;
        public ValueController(DataContext dc)
        {
            this.dc = dc;
        }
        // GET: /<controller>/
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var value = await dc.value.ToListAsync();
            return Ok(value);
        }
    }
}
