using HeartBeatStatus.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/beat")]
public class HeartBeatController : ControllerBase
{
    [HttpGet]
    public HeartBeat GetServerStatus()
    {
        return new HeartBeat { statusCode = 200, msg = "Server Live", timestamp = DateTime.UtcNow };
    }
}