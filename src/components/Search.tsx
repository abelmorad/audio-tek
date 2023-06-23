import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import SearchBar from "./SearchBar";

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
        <div className="__history--wrapper">
            <div className="__history">TMA2 Wireles1313s</div>
            <div className="__history">TMA2 Wireless</div>
        </div>
      </section>
    </section>
  );
}

export default Search;
