using System;
using TestApp.DataAccess;

namespace TestApp.Data
{
	public class CateringPointRepos : Repository<CateringPoint>
    {
        public CateringPointRepos(ApplicationDbContext context) : base(context)
        {
        }
    }
}