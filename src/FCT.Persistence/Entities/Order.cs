using FCT.Persistence.Enums;
using System.Collections.Generic;

namespace FCT.Persistence.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public OrderStatusEnum OrderStatus { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<OrderedGood> OrderedGoods { get; set; }
    }
}
