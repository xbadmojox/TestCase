

using Microsoft.EntityFrameworkCore;
using TestApp.Data;
using TestApp.Extensions;

internal class Program
{
    private static void Main(string[] args)
    {
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddExtensions();

        string connectionString = "Host=localhost;Port=5432;Database=TestDataBase;Username=postgres;Password=root;";

        builder.Services.AddCors();

        builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(connectionString, x => x.UseNetTopologySuite()));

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }


        app.UseCors(x => x
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials()
            .SetIsOriginAllowed(origin => true));

        app.UseHttpsRedirection();

        app.MapControllers();

        app.Run();
    }
}