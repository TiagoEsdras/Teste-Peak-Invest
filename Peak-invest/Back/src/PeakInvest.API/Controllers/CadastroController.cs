using System;
using Microsoft.AspNetCore.Mvc;
using PeakInvest.API.Models;
using PeakInvest.API.services;

namespace PeakInvest.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Cadastro inputCadastroModel)
        {
            var service = new EmprestimoService();
            var resultado = service.CalcularValorTotal(inputCadastroModel);
            return Ok(resultado);
        }
    }
}