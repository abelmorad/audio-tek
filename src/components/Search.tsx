import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";
import CloseBtn from "./CloseBtn";

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
            <span>TMA2 Wireles1313s</span> <CloseBtn />
          </div>
          <div className="history">
            <span>TMA2 Wireles1313s</span> <CloseBtn />
          </div>
        </div>
      </section>
      <section className="popular-product">
        <p>Popular product</p>
      </section>
    </section>
  );
}

export default Search;
