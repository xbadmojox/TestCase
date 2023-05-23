using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TestApp.Migrations
{
    /// <inheritdoc />
    public partial class ChangeBd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DayOfWeek",
                table: "Client_CateringPoint");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Client_CateringPoint",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Client_CateringPoint");

            migrationBuilder.AddColumn<int>(
                name: "DayOfWeek",
                table: "Client_CateringPoint",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
