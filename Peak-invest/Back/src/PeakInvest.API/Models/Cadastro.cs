namespace PeakInvest.API.Models
{
    public class Cadastro
    {
        public int QntParcela { get; set; }
        public decimal ValorParcela { get; set; }

        public Cadastro(int qntParcela, decimal valorParcela)
        {
            this.QntParcela = qntParcela;
            this.ValorParcela = valorParcela;
        }
    }
}