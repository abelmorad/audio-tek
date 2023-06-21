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
    <Link className="shop-now" to={"/product"}>
      <section className="category-card">
        <div className="card-title-wrapper">
          <h2>{category}</h2>
          <p>Shop now</p>
        </div>
        <figure>
          <img src={src} alt={alt} />
        </figure>
      </section>
    </Link>
  );
}

export default ProductCard;
