import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import FilterBtn from "./FilterBtn";
import Filter from "./Filter";

import AllProductCard from "./AllProductCard";

import maharishiwaistbag from "../../public/allproducts/maharishibag.png";
import c17adapterneon from "../../public/allproducts/c17adapterneon.png";
import tma2studiowireless from "../../public/allproducts/tma2studiowireless.png";
import tracks from "../../public/allproducts/tracks.png";
import { useState } from "react";

function ProductExplore() {
  //filter button open
  const [filterBtn, setFilterBtn] = useState(Boolean);
  const handleFilterClick = () => {
    setFilterBtn(!filterBtn);
    console.log("Clicked");
  };

  return (
    <>
      <section className="product-explore">
        <Nav
          nav={
            <>
              <BackBtn to={"/home"} />
              <Logo />
              <CartBtn />
            </>
          }
        />
        <div className="__heading">
          <p>Headphone</p>
          <h2>Products</h2>
        </div>
        <section className="__filter--container">
          <FilterBtn filterBtn={handleFilterClick} />
          <Filter
            closeX={handleFilterClick}
            style={filterBtn ? { display: "flex" } : { display: "none"}}
          />
        </section>
      </section>
      <section className="products__card">
        <AllProductCard
          datatype="accessories"
          src={maharishiwaistbag}
          alt={maharishiwaistbag}
          productname="Maharishi Waist Bag"
          currency="USD"
          price={120}
          rating={4}
          reviews={50}
        />
        <AllProductCard
          datatype="headphone"
          src={tma2studiowireless}
          alt={tma2studiowireless}
          productname="TMA-2 Studio Wireless Headphone"
          currency="USD"
          price={350}
          rating={4.9}
          reviews={250}
        />
        <AllProductCard
          datatype="cables"
          src={c17adapterneon}
          alt={c17adapterneon}
          productname="C17 Staight - 1.2m - Remote with mic"
          currency="USD"
          price={25}
          rating={4}
          reviews={29}
        />
        <AllProductCard
          datatype="headphone"
          src={tracks}
          alt={tracks}
          productname="Tracks"
          currency="USD"
          price={65}
          rating={3.5}
          reviews={49}
        />
      </section>
    </>
  );
}

export default ProductExplore;
