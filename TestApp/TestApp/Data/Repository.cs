using Infrastructure.Data;

namespace TestApp.Data
{
    public abstract class Repository<T> : BaseRepository<T> where T : class
    {
        protected Repository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
