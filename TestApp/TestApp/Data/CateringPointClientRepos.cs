using System;
using TestApp.DataAccess;

namespace TestApp.Data
{
	public class CateringPointClientRepos : Repository<Client_CateringPoint>
    {
        public CateringPointClientRepos(ApplicationDbContext context) : base(context)
        {
        }
        

    }
}