import { Link } from "react-router-dom";

function ProductCard({
  src,
  alt,
  category,
}: {
  category: string;
  src: string;
  alt: string;
}) {
  return (
    <section className="category-card">
      <div className="card-title-wrapper">
        <h2>{category}</h2>
        <Link className="shop-now" to="#">
          Shop now
        </Link>
      </div>
      <figure>
        <img src={src} alt={alt} />
      </figure>
    </section>
  );
}

export default ProductCard;
