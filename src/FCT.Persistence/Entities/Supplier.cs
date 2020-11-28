using System.Collections.Generic;

namespace FCT.Persistence.Entities
{
    public class Supplier
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Good> Goods { get; set; }
    }
}
