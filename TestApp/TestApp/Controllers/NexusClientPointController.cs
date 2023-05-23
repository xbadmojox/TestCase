using DataAccess.DTOModel;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.JsonPatch.Internal;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using System.Net.Sockets;
using TestApp.DataAccess;
using static System.Reflection.Metadata.BlobBuilder;

namespace TestApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NexusClientPointController : MainController<Client_CateringPoint>
    {
        private readonly ILogger<NexusClientPointController> _logger;
        public readonly IRepository<Client> _�lientManager;
        public readonly IRepository<CateringPoint> _�ateringPointManager;
        public NexusClientPointController(ILogger<NexusClientPointController> logger,
            IRepository<Client_CateringPoint> Manager,
            IRepository<Client> ClientManager,
            IRepository<CateringPoint> CateringPointManager) : base(Manager)
        {
            _logger = logger;
            _�lientManager = ClientManager;
            _�ateringPointManager = CateringPointManager;

        }


        [HttpPost("GetClient")]
        public IEnumerable<ResponseListDto> GetClient(idDto idClient)
        {
            if (idClient.idClient == 0) return null;
            var client = _�lientManager.DbSet.ToArray();
            var cateringPoint = _manager.DbSet.ToArray();

            var huhu = cateringPoint.Where(x => x.ClientId == idClient.idClient).ToList();

            var listCategoryPoint = cateringPoint.Where(x => x.CateringPointId == idClient.idClient).Select(x => new ResponseListDto { 
                    Date = x.Date,
                    Name = client.Where(client => client.Id == x.ClientId).First().Name,
                    Event = x.Event
            }
            ).ToList();

            return listCategoryPoint;
        }
        
        [HttpPost("GetPoint")]
        public IEnumerable<ResponseListDto> GetPoint(int idPoint)
        {
            var �ateringPointManager = _�ateringPointManager.DbSet.ToArray();
            var cateringPoint = _manager.DbSet.ToArray();

            var huhu = cateringPoint.Where(x => x.CateringPointId == idPoint).ToList();

            var listCategoryPoint = cateringPoint.Where(x => x.ClientId == idPoint).Select(x => new ResponseListDto
            {
                Date = x.Date,
                Name = �ateringPointManager.Where(point => point.Id == x.CateringPointId).First().Name,
                Event = x.Event
            }
            ).ToList();

            return listCategoryPoint;
        }
    }
}