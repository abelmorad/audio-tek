import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";
import CloseBtn from "./CloseBtn";
import PopularProductCard from "./PopularProductCard";

import tma2 from "../../public/allproducts/tma2studiowireless.png"

function Search() {
  return (
    <section className="search">
      <Nav
        nav={
          <>
            <BackBtn />
            <p>Search</p>
            <CartBtn />
          </>
        }
      />
      <SearchBar />
      <section className="search__latest">
        <p>Latest search</p>
        <div className="history--wrapper">
          <div className="history">
            <span>TMA2 Wireles1313s</span>
            <CloseBtn />
          </div>
          <div className="history">
            <span>TMA2 Wireles1313s</span>
            <CloseBtn />
          </div>
        </div>
      </section>
      <section className="popular-product">
        <p>Popular product</p>
        <PopularProductCard
        popularCardSrc={tma2}
        popularCardAlt={tma2}
        popularProductName="TMA-2 Studio Wireless"
        currency="USD"
        price={350}
        rating={4.9}
        reviews={250}
        />
        <PopularProductCard
        popularCardSrc={tma2}
        popularCardAlt={tma2}
        popularProductName="TMA-2 Studio Wireless"
        currency="USD"
        price={350}
        rating={4.9}
        reviews={250}
        />
        <PopularProductCard
        popularCardSrc={tma2}
        popularCardAlt={tma2}
        popularProductName="TMA-2 Studio Wireless"
        currency="USD"
        price={350}
        rating={4.9}
        reviews={250}
        />
        <PopularProductCard
        popularCardSrc={tma2}
        popularCardAlt={tma2}
        popularProductName="TMA-2 Studio Wireless"
        currency="USD"
        price={350}
        rating={4.9}
        reviews={250}
        />
      </section>
    </section>
  );
}

export default Search;
