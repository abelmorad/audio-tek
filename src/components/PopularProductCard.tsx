import star from "../../public/icon/star.svg";

function PopularProductCard({
  popularCardSrc,
  popularCardAlt,
  popularProductName,
  currency,
  price,
  rating,
  reviews,
}: {
  popularCardSrc: string;
  popularCardAlt: string;
  popularProductName: string;
  currency: string;
  price: number;
  rating: number;
  reviews: number;
}) {
  return (
    <div className="popular-card--container">
      <img src={popularCardSrc} alt={popularCardAlt} />
      <div>
        <p>{popularProductName}</p>
        <b>
          {currency} {price}
        </b>
        <div className="rating-reviews">
          <div>
            <img
              style={{ height: "10px", width: "10px" }}
              src={star}
              alt={star}
            />
            <p>{rating}</p>
          </div>
          <div>
            <p>{reviews} Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProductCard;
