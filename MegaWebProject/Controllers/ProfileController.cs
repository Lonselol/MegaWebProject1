using MegaWebProject.Enums;
using MegaWebProject.Objects;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace MegaWebProject.Controllers
{
    public class ProfileController : Controller
    {
        public readonly ApplicationContext _db;

        public ProfileController(ApplicationContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("profile/getInfo")]
        public ProfileInfo GetInfo()

        {
            return ProfileInfo.GetUser(_db, 1);
        }
    }
}
