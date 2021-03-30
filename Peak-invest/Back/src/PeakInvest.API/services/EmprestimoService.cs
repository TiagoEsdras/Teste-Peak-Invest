using PeakInvest.API.Models;

namespace PeakInvest.API.services
{
    public class EmprestimoService
    {
        public ResultadoEmprestimo CalcularValorTotal(Cadastro input) {
            const decimal juros = 0.05m;
            var valorEmprestimo = input.ValorParcela * input.QntParcela;
            valorEmprestimo += valorEmprestimo * juros;
            return new ResultadoEmprestimo(valorEmprestimo);
        }
    }
}