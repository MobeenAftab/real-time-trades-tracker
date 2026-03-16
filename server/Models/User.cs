namespace UserProfile.Models;

public class User
{
    public long Id { get; set; }
    public required string firstName { get; set; }
    public string? middleName { get; set; }
    public required string lastName { get; set; }
    public string? name { get; set; }
    public string? city { get; set; }
    public string? photo { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }

}