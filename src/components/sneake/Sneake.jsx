import React from "react";
import shoes from "../../assets/shoes.png";
const Sneake = () => {
  return (
    <div className="snake ">
      <div className="container">
        <div className="cards">
          <div className="card">
            <h1>Adidas Men Running Sneakers</h1>
            <p>Performance and design. Taken right to the edge.</p>
            <span>SHOP NOW</span>
          </div>
          <div className="card">
            <img src={shoes} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sneake;
