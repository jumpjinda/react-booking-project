import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <span className="fpName">Apartment GG</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
          alt=""
        />
        <span className="fpName">Apartment GG</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <span className="fpName">Apartment GG</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          className="fpImg"
          src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2897&q=80"
          alt=""
        />
        <span className="fpName">Apartment GG</span>
        <span className="fpCity">Bangkok</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
