import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";

function ProductExplore() {
  return (
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
    </section>
  );
}

export default ProductExplore;
