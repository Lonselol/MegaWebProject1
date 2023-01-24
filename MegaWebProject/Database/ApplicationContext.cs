using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace MegaWebProject
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) 
            : base(options) 
        {
            //Database.EnsureCreated();
            //User user = new User { Name = "Егор", About = "Хочу Учить", WantsToBeMentor = true, WantsAMentor = false };
            //Add(user);
            //SaveChanges();
        }
        public DbSet<User> Users { get; set; }
    }
}