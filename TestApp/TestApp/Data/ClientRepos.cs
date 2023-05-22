using System;
using TestApp.DataAccess;

namespace TestApp.Data
{
	public class ClientRepos : Repository<Client>
    {
        public ClientRepos(ApplicationDbContext context) : base(context)
        {
        }
    }
}

