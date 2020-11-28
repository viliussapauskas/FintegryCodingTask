namespace FCT.Persistence.Entities
{
    public class DiscountCoupon
    {
        public int Id { get; set; }
        public string CouponCode { get; set; }
        public int DiscountPercentage { get; set; }
    }
}
