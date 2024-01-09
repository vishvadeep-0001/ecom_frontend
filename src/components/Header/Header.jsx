import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";


const user = {
  _id: "",
};

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          SHOP.
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
            <div className="input-group ">  
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="button-addon1"
              >
                <FaSearch/>
              </button>
            </div>
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <Link to="/" className="btn btn-outline-success">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="btn btn-outline-success">
                  Products
                </Link>
              </li>
              {user?._id ? (
                <>
                  <li className="nav-item dropdown user-btn">
                    <Link
                      className="dropdown-toggle btn btn-outline-success"
                      to="/profile"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaUserAlt />
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="/orders" className="dropdown-item">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/logout" className="dropdown-item">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="btn btn-outline-success">
                    {<FaSignInAlt />}
                  </Link>
                </li>
              )}
              <li to="/cart" className="nav-item">
                <Link to="/cart" className="btn btn-outline-success">
                  {<FaShoppingCart />}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
