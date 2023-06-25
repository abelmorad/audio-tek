import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm.js";

import CloseBtn from "./CloseBtn";

function Filter({ style, closeX }: { style: any; closeX: any }) {
  return (
    <div style={style} className="filter">
      <div className="filter__heading__close">
        <h2>Filter</h2>
        <CloseBtn closeX={closeX}  />
      </div>
      <div className="__category">
        <p>Category</p>
        <div className="category__links--container">
          <Swiper spaceBetween={10} slidesPerView={3}>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Headphone
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Headband
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Speaker Unit
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Earpads
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Cables
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="category__link" to="#">
                Accessories
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="sort">
        <p>Sort By</p>
        <div className="sort__container">
          <div className="sort__container--flexrow">
            <div className="sort__btn">Popularity</div>
            <div className="sort__btn">Newest</div>
            <div className="sort__btn">Oldest</div>
          </div>
          <div className="sort__container--flexrow">
            <div className="sort__btn">High Price</div>
            <div className="sort__btn">Low Price</div>
            <div className="sort__btn">Review</div>
          </div>
        </div>
      </div>
      <div className="price-range">
        <p>Price Range</p>
        <div>
          <input
            className="price-range__input"
            type="number"
            placeholder="Min Price"
          />
          <input
            className="price-range__input"
            type="number"
            placeholder="Max Price"
          />
        </div>
      </div>
      <button className="filter__btn">Apply Filter</button>
    </div>
  );
}

export default Filter;
