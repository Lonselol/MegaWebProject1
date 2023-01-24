using MegaWebProject;
using MegaWebProject.Enums;
using System.Runtime.Intrinsics.X86;

namespace MegaWebProject.Objects
{
    /// <summary>
    /// Информация о пользователе
    /// </summary>
    public class ProfileInfo
    {

        public int Id { get; private set; }
        public string Name { get; private set; }
        public string About { get; private set; }
        public bool WantsToBeMentor { get; private set; }
        public bool WantsAMentor { get; private set; }

        public static ProfileInfo GetUser(ApplicationContext _db, int _id)
        {
            User user = _db.Users.Where(i => i.Id == _id).First();
            return new ProfileInfo()
            {
                Id = 1,
                Name = user.Name,
                About = user.About,
                WantsToBeMentor = user.WantsToBeMentor,
                WantsAMentor = user.WantsAMentor,
            };
        }

        public static ProfileInfo Fail()
        {
            return new ProfileInfo()
            {
                Id = -1,
                Name = "Null",
                About = "Null",
                WantsToBeMentor = false,
                WantsAMentor = false,
            };
        }
    }
}