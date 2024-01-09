import React from "react";
import "./Home.css";
import slideFirst from "../assets/slide1.jpg";
import slideSecond from "../assets/slide2.jpg";
import { Link } from "react-router-dom";
import Product from "./Products";
import FeauredProduct from "./FeauredProduct";

const productItem = {
  _id: "1234",
  name: "yogesh",
  url: "http:asdshad.com",
  price: 200,
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
};

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slideFirst} className="d-block w-100" alt="..." />
              <div className="home-banner-text">
                <h1>Women's Top</h1>
                <h2>52% Discount For This Season</h2>
                <Link
                  to="/products"
                  className="btn btn-success text-uppercase mt-2"
                >
                  Our Products
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slideSecond} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slideFirst} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
            <FeauredProduct product={productItem} />
            </div>
          </div>
        </div>
            
      </section>
    </>
  );
};
export default Home;
