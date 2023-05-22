using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TestApp.DataAccess;

namespace TestApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientController : MainController<Client>
    {
        private readonly ILogger<ClientController> _logger;
        public ClientController(ILogger<ClientController> logger, IRepository<Client> ClientManager) : base(ClientManager)
        {
            _logger = logger;
        }

        [HttpPost("GetClient")]
        public IActionResult GetClient()
        {
            return Ok();
        }
    }
}