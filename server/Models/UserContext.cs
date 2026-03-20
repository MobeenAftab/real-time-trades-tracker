using Microsoft.EntityFrameworkCore;

namespace UserProfile.Models;

public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .Entity<User>()
            .Property(e => e.CreatedAt)
            .HasDefaultValueSql("now()");
    }
}