namespace PeakInvest.API.Models
{
    public class Consulta
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Consulta(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}