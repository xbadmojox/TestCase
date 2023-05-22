

using Microsoft.EntityFrameworkCore;
using TestApp.Data;

internal class Program
{
    private static void Main(string[] args)
    {
        var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        string connectionString = "Host=localhost;Port=5432;Database=TestDataBase;Username=postgres;Password=root;";

        builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                              policy =>
                              {
                                  policy.WithOrigins("http://localhost:3000");
                              });
        });

        builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(connectionString, x => x.UseNetTopologySuite()));

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseCors(MyAllowSpecificOrigins);

        app.UseHttpsRedirection();

        //app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}