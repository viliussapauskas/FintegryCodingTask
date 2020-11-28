using FCT.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.Extensions.Configuration;

namespace FCT.Persistence
{
    public class FCT_DbContext : DbContext
    {
        public FCT_DbContext(DbContextOptions<FCT_DbContext> options)
            : base(options)
        {
        }

        public DbSet<Good> Goods { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderedGood> OrderedGoods { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<DiscountCoupon> DiscountCoupones { get; set; }
    }
}
