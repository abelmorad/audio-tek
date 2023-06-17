import logo from "../../public/logo.svg";
import user from "../../public/userprofile.png";
import headphone from "../../public/icon/headphone.svg";
import earpads from "../../public/icon/earpads.png";
import headband from "../../public/icon/headband.png";
import cable from "../../public/icon/cable.svg"
import speakerunit from "../../public/icon/speakerunit.png";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import 'swiper/swiper-bundle.esm.js'
import 'swiper/css/autoplay'

import ProductCard from "./ProductCard";

function Home() {
  return (
    <>
      <main className="home-container">
        <nav>
          <menu className="menu-icon" />
          <div className="home-logo-wrapper">
            <img
              style={{ height: "20px", width: "20px" }}
              src={logo}
              alt="audio tek logo"
            />
            <h1>Audio Tek</h1>
          </div>
          <figure>
            <img src={user} alt="dude" />
          </figure>
        </nav>
        <section className="search-wrapper">
          <p>Hi, Abel</p>
          <h2>What are you looking for today?</h2>
          <input
            className="search-box"
            type="search"
            placeholder="Search product"
          />
        </section>
      </main>
      <section className="home-products-container">
        <div className="product-category-wrapper">
        <h3>Our Products</h3>
        <Swiper
        autoplay
        pagination
        spaceBetween={10}
         slidesPerView={1}
        >
            <SwiperSlide>
              <ProductCard
                category="TMA - 2 Modular Headphone"
                src={headphone}
                alt={headphone}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                category="E01 On ear - Microfiber"
                src={headband}
                alt={headband}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                category="S02 Punchy Sound"
                src={speakerunit}
                alt={speakerunit}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                category="E01 - Earpads"
                src={earpads}
                alt={earpads}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                category="CO2 - Cable"
                src={cable}
                alt={cable}
              />
            </SwiperSlide>
        </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
