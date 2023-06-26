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
          <ProductCard />
        </section>
        <section className="featured-card-container">
          <header className="feature-title">
            <h3>Featured Products</h3>
            <Link to="/product">See All</Link>
          </header>
          <FeaturedCard />
        </section>
      </section>
    </>
  );
}

export default Home;
