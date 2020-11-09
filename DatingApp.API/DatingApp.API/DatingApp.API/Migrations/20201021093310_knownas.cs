using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class knownas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KonwnAs",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "KnownAs",
                table: "User",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KnownAs",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "KonwnAs",
                table: "User",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
