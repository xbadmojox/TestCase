using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using TestApp.DataAccess;

namespace TestApp.Data
{
    public abstract class Repository<T> : BaseRepository<T> where T : class
    {
        protected Repository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
