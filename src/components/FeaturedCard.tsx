import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm.js";
import "swiper/css/autoplay";

function FeaturedCard() {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("public/productdata.json")
      .then((res) => {
        setProductData(res.data.products.slice(0,4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Swiper spaceBetween={20} slidesPerView={2.5}>
      {productData.map((data) => (
        <SwiperSlide key={data.key}>
          <section className="featured-card-wrapper">
            <figure>
              <img
                className="featured-card-img"
                src={data.image}
                alt={data.productName}
              />
            </figure>
            <div className="item-price-wrapper">
              <p>{data.productName}</p>
              <b>USD {data.price}</b>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FeaturedCard;
