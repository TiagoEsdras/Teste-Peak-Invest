using System;
using Microsoft.AspNetCore.Mvc;
using PeakInvest.API.Models;

namespace PeakInvest.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Cadastro inputCadastroModel)
        {
            var infos = new Cadastro(inputCadastroModel.QntParcela, inputCadastroModel.ValorParcela);
            double valorTotal = Convert.ToDouble(infos.QntParcela * infos.ValorParcela);
            valorTotal += valorTotal * 0.05;
            
            return Ok(valorTotal.ToString("F2"));
        }
    }
}