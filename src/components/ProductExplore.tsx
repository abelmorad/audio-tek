import Nav from "./Nav";
import BackBtn from "./BackBtn";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import FilterBtn from "./FilterBtn";
import Filter from "./Filter";

import star from "../../public/icon/star.svg";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductExplore() {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/abelmorad/audio-tek/main/public/productdata.json"
      )
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //filter button open
  const [filterBtn, setFilterBtn] = useState(Boolean);
  const handleFilterClick = () => {
    setFilterBtn(!filterBtn);
  };

  const filterResult = (categoryItem: string) => {
    const result = productData.filter((currentData) => {
      return currentData.category === categoryItem;
    });
    setProductData(result);
  };

  // function handleApplyFilter(e:any) {
  //   e.preventefault();
  // }

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
          <div className="show-all-btn">Show All</div>
          <FilterBtn filterBtn={handleFilterClick} />
          <Filter
            // filtersubmit={handleApplyFilter}
            closeX={handleFilterClick}
            style={filterBtn ? { display: "flex" } : { display: "none" }}
            filteraccessory={() => filterResult("accessory")}
            filterspeaker={() => filterResult("speaker unit")}
            filterheadband={() => filterResult("headband")}
            filterheadphone={() => filterResult("headphone")}
            filtercable={() => filterResult("cable")}
            filterearpad={() => filterResult("earpad")}
          />
        </section>
      </section>
      <section className="products__card">
        <>
          {productData.map((data) => (
            <section
              className="all-product-card"
              key={data.key}
            >
              <figure>
                <img className="featured-card-img" src={data.image} />
              </figure>
              <div className="item-price-wrapper">
                <p>{data.productName}</p>
                <b>USD {data.price}</b>
              </div>
              <div className="__rating-reviews">
                <div>
                  <img
                    style={{ height: "10px", width: "10px" }}
                    src={star}
                    alt={star}
                  />
                  <p>{data.rating}</p>
                </div>
                <div>
                  <p>{data.reviews} Reviews</p>
                </div>
              </div>
            </section>
          ))}
        </>
      </section>
    </>
  );
}

export default ProductExplore;
