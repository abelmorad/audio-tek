import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm.js";
import "swiper/css/autoplay";

function ProductCard() {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("../../public/productdata.json")
      .then((res) => {
        setProductData(res.data.products.slice(0,4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Swiper autoplay pagination spaceBetween={10} slidesPerView={1}>
      {productData.map((data) => (
          <SwiperSlide key={data.key}>
            <Link to={"/product"} >
            <section className="category-card">
              <div className="card-title-wrapper">
                <h2>{data.productName}</h2>
              </div>
              <figure>
                <img src={data.image} alt={data.productName} />
                <p>Shop now</p>
              </figure>
            </section>
          </Link>
          </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductCard;
