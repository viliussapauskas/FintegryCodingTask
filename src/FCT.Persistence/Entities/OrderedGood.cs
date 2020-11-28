namespace FCT.Persistence.Entities
{
    public class OrderedGood
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public int OrderId { get; set; }
        public virtual Order Order { get; set; }
        public int GoodId { get; set; }
        public virtual Good Good { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
