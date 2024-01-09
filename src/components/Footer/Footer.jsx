import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";
import { IoMdAppstore } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="">
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-4 left-footer">
            <h4>Download Our App</h4>
            <p>Download App for Android and IOS mobile phone.</p>
            <Link to="playstore.com">{<BiLogoPlayStore />}</Link>
            <Link to="appstore.com">{<IoMdAppstore />}</Link>
          </div>
          <div className="col-4 center-footer">
            <h4>SHOP.</h4>
            <p>High quality product is our priority.</p>
            <p>Copyrights 2024 &copy; Vishvadeep</p>
          </div>
          <div className="col-4 right-footer">
            <h4>Follow us</h4>
            <Link to="instagram.com">{<FaSquareInstagram />}</Link>
            <Link to="twitter.com">{<FaTwitterSquare />}</Link>
            <Link to="facebook.com">{<FaFacebookSquare />}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
