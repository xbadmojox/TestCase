using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using TestApp.DataAccess;

namespace TestApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PointController : MainController<CateringPoint>
    {
        private readonly ILogger<PointController> _logger;
        public PointController(ILogger<PointController> logger, IRepository<CateringPoint> ClientManager) : base(ClientManager)
        {
            _logger = logger;
        }

        [HttpPost("GetPoint")]
        public async Task<CateringPoint[]> GetCateringPoint()
        {
            return _manager.DbSet.ToArray();
        }
    }
}