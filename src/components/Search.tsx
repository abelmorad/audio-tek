import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";
import PopularProductCard from "./PopularProductCard";

function Search() {

  return (
    <section className="search">
      <Nav
        nav={
          <>
            <BackBtn to="/product"/>
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
          </div>
          <div className="history">
            <span>TMA2 Wireles1313s</span>
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
