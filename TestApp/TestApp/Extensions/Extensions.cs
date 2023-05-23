using System;
using Infrastructure.Interfaces;
using TestApp.Data;
using TestApp.DataAccess;

namespace TestApp.Extensions
{
	public static class Extensions
	{
        public static void AddExtensions(this IServiceCollection services)
        {
            services.AddTransient<IRepository<Client>, ClientRepos>();
            services.AddTransient<IRepository<CateringPoint>, CateringPointRepos>();
            services.AddTransient<IRepository<Client_CateringPoint>, CateringPointClientRepos>();
        }
	}
}

