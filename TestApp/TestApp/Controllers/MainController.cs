using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data;
using TestApp.DataAccess;

namespace TestApp.Controllers
{
    public class MainController<T> : ControllerBase where T : IdBase
    {
        public readonly IRepository<T> _manager;

        public MainController(IRepository<T> Manager)
        {
            _manager = Manager;
        }

        [HttpPost("Save")]
        public async Task<IActionResult> Save(T dataSend)
        {
            await _manager.AddAsync(dataSend);
            return Ok();
        }

        [HttpPost("Delite")]
        public async Task<IActionResult> Delite(int dataSend)
        {
            var value = _manager.DbSet
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == dataSend);
            await _manager.DeleteAsync(value);
            return Ok();
        }
    }
}
