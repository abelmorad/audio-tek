import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import Filter from "./Filter";

function ProductExplore() {
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
          <Filter />
        </section>
      </section>
      <section className="products__card">
        
      </section>
    </>
  );
}

export default ProductExplore;
