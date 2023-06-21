import headphone from "../../public/icon/headphone.svg";
import earpads from "../../public/icon/earpads.png";
import headband from "../../public/icon/headband.png";
import cable from "../../public/icon/cable.svg";
import speakerunit from "../../public/icon/speakerunit.png";

import tracks from "../../public/products/tracks.png";
import c17adapterneon from "../../public/products/c17adapterneon.png";
import tma2studiowireless from "../../public/products/tma2studiowireless.png";
import maharishiwaistbag from "../../public/products/maharishibag.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.esm.js";
import "swiper/css/autoplay";

import ProductCard from "./ProductCard";
import FeaturedCard from "./FeaturedCard";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import Logo from "./Logo";
import MenuBtn from "./MenuBtn";
import Avatar from "./Avatar.";

function Home() {
  return (
    <>
      <main className="home-container">
        <Nav
          nav={
            <>
              <MenuBtn />
              <Logo />
              <Avatar />
            </>
          }
        />
        <section className="search-wrapper">
          <header>
            <p>Hi, Abel</p>
            <h2>What are you looking for today?</h2>
          </header>
          <SearchBar />
        </section>
      </main>
      <section className="home-products-container">
        <section className="product-category-wrapper">
          <h3>Our Products</h3>
          <Swiper autoplay pagination spaceBetween={10} slidesPerView={1}>
            <SwiperSlide>
              <ProductCard
                category="TMA - 2 Modular Headphone"
                src={headphone}
                alt={headphone}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                category="H01 Slim - PU foam"
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
                category="E01 On ear Microfiber Diaphragm"
                src={earpads}
                alt={earpads}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard category="CO2 - Cable" src={cable} alt={cable} />
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="featured-card-container">
          <header className="feature-title">
            <h3>Featured Products</h3>
            <Link to="#">See All</Link>
          </header>
          <Swiper spaceBetween={25} slidesPerView={2}>
            <SwiperSlide>
              <FeaturedCard
                src={maharishiwaistbag}
                alt={maharishiwaistbag}
                productname="Maharishi Waist Bag"
                currency="USD"
                price={120}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard
                src={tracks}
                alt={tracks}
                productname="Tracks"
                currency="USD"
                price={60}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard
                src={c17adapterneon}
                alt={c17adapterneon}
                productname="C17 Neon w/ Mic"
                currency="USD"
                price={25}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard
                src={tma2studiowireless}
                alt={tma2studiowireless}
                productname="TM2-2 Studio Wireless+"
                currency="USD"
                price={350}
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </>
  );
}

export default Home;
