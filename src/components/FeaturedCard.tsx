

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
    <section className="featured card">
        <figure>
            <img src={src} alt={alt} />
        </figure>
        <div className="item-price-wrapper">
            <p>{productname}</p>
            <p>{currency} {price}</p>
        </div>
    </section>
  )
}

export default FeaturedCard