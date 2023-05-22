using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using TestApp.DataAccess;

namespace TestApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NexusClientPointController : MainController<Client_CateringPoint>
    {
        private readonly ILogger<NexusClientPointController> _logger;
        public NexusClientPointController(ILogger<NexusClientPointController> logger, IRepository<Client_CateringPoint> ClientManager) : base(ClientManager)
        {
            _logger = logger;
        }


        [HttpPost("GetClient")]
        public IActionResult GetClient()
        {
            return Ok();
        }
        
        [HttpPost("GetPoint")]
        public IActionResult GetPoint()
        {
            return Ok();
        }
    }
}