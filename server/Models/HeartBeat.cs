namespace HeartBeatStatus.Models;

public class HeartBeat
{
    public int statusCode { get; set; }
    public string msg { get; set; } = string.Empty;
    public required DateTime timestamp { get; set; }

}