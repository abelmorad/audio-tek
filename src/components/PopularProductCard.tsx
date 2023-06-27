import star from "../../public/icon/star.svg";

function PopularProductCard() {
 
  return (
   <>
     <div className="popular-card--container">
      <img src="" alt="" />
      <div>
        <p>{}</p>
        <b>
          {} {}
        </b>
        <div className="rating-reviews">
          <div>
            <img
              style={{ height: "10px", width: "10px" }}
              src={star}
              alt={star}
            />
            <p>{}</p>
          </div>
          <div>
            <p>{} Reviews</p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default PopularProductCard;
