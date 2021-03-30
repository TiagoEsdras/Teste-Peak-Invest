using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PeakInvest.API.Models;

namespace PeakInvest.API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ConsultaController : ControllerBase
    {
        private List<Consulta> _nomes = new List<Consulta>
        {
            new Consulta(1, "João"),
            new Consulta(2, "Maria"),
            new Consulta(3, "Ana")
        };

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_nomes);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = _nomes.SingleOrDefault(p => p.Id == id); 
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        } 
    }
}