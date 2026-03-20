namespace UserProfile.Models;

public class User
{
    public long Id { get; set; }
    public required string FirstName { get; set; }
    public string? MiddleName { get; set; }
    public required string LastName { get; set; }
    public string? Name { get; set; }
    public string? City { get; set; }
    public string? Photo { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }

}