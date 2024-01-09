import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ProductCard from "./FeauredProduct";


const options = {
  edit:false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20:25,
  value: 2.5,
  isHalf: true
}

const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3" style={{ border: "2px solid red" }}>
          
        </div>
        <div className="col-3" style={{ border: "2px solid blue" }}>
          card-1
        </div>
        <div className="col-3" style={{ border: "2px solid yellow" }}>
          card-2
        </div>
        <div className="col-3" style={{ border: "2px solid green" }}>
          card-3
        </div>
      </div>
    </div>
  );
};

export default Product;
