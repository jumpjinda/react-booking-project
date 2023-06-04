import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="siImg"
      />
      <div className="siDescription">
        <h1 className="siTitle">China Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeature">
          Entire studio - 1 bathroom - 21m<sub>2</sub> full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailHeader">
          <span className="siDetailText">Excellent</span>
          <span className="siDetailScore">8.9</span>
        </div>
        <div className="siDetailPrice">
          <span className="siPrice">$112</span>
          <span className="siTax">includes taxes and fees</span>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
