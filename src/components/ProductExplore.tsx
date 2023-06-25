import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import FilterBtn from "./FilterBtn";
import Filter from "./Filter";

import AllProductCard from "./AllProductCard";

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
        <AllProductCard />
      </section>
    </>
  );
}

export default ProductExplore;
