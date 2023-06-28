import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm.js";

import CloseBtn from "./CloseBtn";

function Filter({
  style,
  closeX,
  filtersubmit,
  filteraccessory,
  filterspeaker,
  filterheadphone,
  filterheadband,
  filterearpad,
  filtercable,
}: {
  style: any;
  closeX: any;
  filtersubmit: any;
  filteraccessory: any;
  filterspeaker: any;
  filterheadphone: any;
  filterheadband: any;
  filterearpad: any;
  filtercable: any;
}) {
  return (
    <form onSubmit={filtersubmit} style={style} className="filter">
      <div className="filter__heading__close">
        <h2>Filter</h2>
        <CloseBtn closeX={closeX} />
      </div>
      <div className="__category">
        <p>Category</p>
        <div className="category__links--container">
          <Swiper spaceBetween={80} slidesPerView={3}>
            <SwiperSlide>
              <div className="category__option" onClick={filteraccessory}>
                Accessories
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category__option" onClick={filterspeaker}>
                Speaker Unit
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category__option" onClick={filterheadphone}>
                Headphone
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category__option" onClick={filterheadband}>
                Headband
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category__option" onClick={filterearpad}>
                Earpads
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category__option" onClick={filtercable}>
                Cables
              </div>
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
    </form>
  );
}

export default Filter;
