using FCT.Persistence.Enums;
using System.Collections.Generic;

namespace FCT.Persistence.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public UserTypeEnum UserType { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
