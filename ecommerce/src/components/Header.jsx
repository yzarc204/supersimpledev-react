import { NavLink } from "react-router";
import axios from "axios";

import "./Header.css";
import MobileLogoWhiteImage from "../assets/images/mobile-logo-white.png";
import LogoWhiteImage from "../assets/images/logo-white.png";
import SearchIconImage from "../assets/icons/search-icon.png";
import CartIconImage from "../assets/icons/cart-icon.png";

export function Header({ cart }) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={LogoWhiteImage} />
            <img className="mobile-logo" src={MobileLogoWhiteImage} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={SearchIconImage} />
          </button>
        </div>

        <div className="right-section">
          <NavLink to="/orders" className="orders-link header-link">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink to="/checkout" className="cart-link header-link">
            <img className="cart-icon" src={CartIconImage} />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
