using TestApp.DataAccess;

namespace TestApp.DataModel
{
    public class Client_PointDto
    {
        public int ClientId { get; set; }
        public int CateringPointId { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
        public bool IsDeleted { get; set; }
        public string Event { get; set; }
    }
}
