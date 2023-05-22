using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestApp.Migrations
{
    /// <inheritdoc />
    public partial class AddText : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Event",
                table: "Client_CateringPoint",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Event",
                table: "Client_CateringPoint");
        }
    }
}
