namespace PeakInvest.API.Models
{
    public class ResultadoEmprestimo
    {
        public ResultadoEmprestimo(decimal valorFinal)
        {
            ValorFinal = valorFinal;
        }
        public decimal ValorFinal { get; set; }
    }
}