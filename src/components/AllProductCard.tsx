import star from "../../public/icon/star.svg";

function AllProductCard({
  src,
  alt,
  productname,
  currency,
  price,
  rating,
  reviews,
  datatype,
}: {
  src: string;
  alt: string;
  productname: string;
  currency: string;
  price: number;
  rating: number;
  reviews: number;
  datatype: string;
}) {
  return (
    <section className="all-product-card" datatype={datatype}>
      <figure>
        <img className="featured-card-img" src={src} alt={alt} />
      </figure>
      <div className="item-price-wrapper">
        <p>{productname}</p>
        <b>
          {currency} {price}
        </b>
      </div>
      <div className="__rating-reviews">
        <div>
          <img style={{ height: "10px", width: "10px" }} src={star} alt={star} />
          <p>{rating}</p>
        </div>
        <div>
          <p>{reviews} Reviews</p>
        </div>
      </div>
    </section>
  );
}

export default AllProductCard;
