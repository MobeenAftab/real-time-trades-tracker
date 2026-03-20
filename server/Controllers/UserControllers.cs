// Manually created controller
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/userv1")]
public class UserController : ControllerBase
{
    [HttpGet]
    public string heartbeat()
    {
        return "Live";
    }
}