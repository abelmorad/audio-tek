import logo from "../../public/logo.svg";
import user from "../../public/userprofile.png";

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
          <a href="#">Headphone</a>
          <a href="#">Headband</a>
          <a href="#">Earpads</a>
          <a href="#">Cables</a>
        </div>
      </section>
    </>
  );
}

export default Home;
