import React, { useEffect, useState } from "react";
import { API_URL } from "../static";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(false);
  let handleClick = () => {
    setClick(!click);
  };

  console.log(click);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  let card = products?.map((el) => (
    <div className="card" key={el.id}>
      <img src={el.image} alt="" />
      <button className={`${click ? "red" : "like"}`} onClick={handleClick}>
        {click ? <FaHeart /> : <CiHeart />}
      </button>
      <p>{el.title}</p>
      <h4>
        ${el.price} <span>$90</span>
      </h4>
    </div>
  ));
  return (
    <div className="container products">
      <h1>Products</h1>
      <div className="cards">{card}</div>
    </div>
  );
}

export default Products;
