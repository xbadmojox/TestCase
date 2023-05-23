using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestApp.DataAccess
{
    public class Client_CateringPoint : IdBase
    {
        public int ClientId { get; set; }
        public Client? Client { get; set; }
        public int CateringPointId { get; set; }
        public CateringPoint? CateringPoint { get; set; }
        public DateTime Date { get; set; }
        public bool IsDeleted { get; set; }
        public string Event { get; set; }
    }
}
