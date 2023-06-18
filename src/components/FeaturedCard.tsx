

function FeaturedCard({
    src,
    alt,
    productname,
    currency,
    price,
  }: {
    src: string;
    alt: string;
    productname: string;
    currency: string;
    price: number;
  }) {
  return (
    <section className="featured-card-wrapper">
        <figure>
            <img className="featured-card-img" src={src} alt={alt} />
        </figure>
        <div className="item-price-wrapper">
            <p>{productname}</p>
            <b>{currency} {price}</b>
        </div>
    </section>
  )
}

export default FeaturedCard