import React from "react";
import Search from "./Header/Search.js";
import Collection from "./Header/Collection.js";
import User from "./Header/User.js";
import Bottom_header from "./Header/bottom-header.js";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <header className="desktop">
      <nav className="desktop">
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            GoDevShop
          </span>
          <Collection />
          <Search />
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
          <User />
        </div>
      </nav>
      <Bottom_header />
    </header>
  );
};
export default Navbar;
