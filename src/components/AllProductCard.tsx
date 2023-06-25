import star from "../../public/icon/star.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function AllProductCard() {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/src/productdata.json")
      .then((res) => {
        setProductData(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {
        productData.map(data => (
        <section className="all-product-card" datatype={data.category}>
          <figure>
            <img className="featured-card-img" src={data.image} />
          </figure>
          <div className="item-price-wrapper">
            <p>{data.productName}</p>
            <b>USD {data.price}</b>
          </div>
          <div className="__rating-reviews">
            <div>
              <img
                style={{ height: "10px", width: "10px" }}
                src={star}
                alt={star}
              />
              <p>{data.rating}</p>
            </div>
            <div>
              <p>{data.reviews} Reviews</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default AllProductCard;
