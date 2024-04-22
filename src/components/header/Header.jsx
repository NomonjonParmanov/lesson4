import React from "react";
import { CARDS } from "../../static";

function Header() {
  let card = CARDS?.map((el) => (
    <div key={el.id} className="card">
      <h2>{el.title}</h2>
      <img src={el.img} alt="" />
    </div>
  ));
  return (
    <div className=" header">
      <div className="container">
        <h1>Super Flash Sale 50% Off</h1>
        <div className="cards">{card}</div>
      </div>
    </div>
  );
}

export default Header;
