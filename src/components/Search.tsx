import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CloseBtn from "./CloseBtn";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";
import PopularProductCard from "./PopularProductCard";

import { useState, useRef } from "react";

function Search() {
  const [searchItems, setSearchItems] = useState<any>([]);
  const inputRef = useRef<any>();

  function onSubmit(e: any) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setSearchItems((prev: any) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <section className="search">
      <Nav
        nav={
          <>
            <BackBtn to="/product" />
            <p>Search</p>
            <CartBtn />
          </>
        }
      />
      <form onSubmit={onSubmit}>
        <SearchBar referrence={inputRef} />
      </form>
      <section className="search__latest">
        <p>Latest search</p>
        <div className="history--wrapper">
          {searchItems.map((item: any) => (
            <div className="history">
              <span>{item}</span>
              <CloseBtn />
            </div>
          ))}
        </div>
      </section>
      <section className="popular-product">
        <p>Popular product</p>
        <PopularProductCard />
      </section>
    </section>
  );
}

export default Search;
