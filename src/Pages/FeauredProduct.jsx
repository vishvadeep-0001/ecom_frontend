import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./FeauredProduct.css";
import { MdCurrencyRupee } from "react-icons/md";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const FeauredProduct = ({ product }) => {
  return (
    <Link className="card" to={product._id}>
      <div
        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img src={product.images[0].url} className="w-100" />
        <div className="mask">
          <div className="d-flex justify-content-evenly h-100">
            <span className="star_review">256 Reviews</span>
            <ReactStars {...options} className="badge bg-success ms-2" />
          </div>
        </div>
        <div className="hover-overlay">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title mb-2">{product.name}</h5>
        <h6 className="mb-3">
          <MdCurrencyRupee />
          {product.price}
        </h6>
      </div>
    </Link>
  );
};

export default FeauredProduct;
