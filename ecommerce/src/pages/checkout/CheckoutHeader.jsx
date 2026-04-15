import { Link } from "react-router";

import "./CheckoutHeader.css";
import LogoImage from "../../assets/images/logo.png";
import MobileLogoImage from "../../assets/images/mobile-logo.png";
import CheckoutLockIconImage from "../../assets/icons/checkout-lock-icon.png";
import { cartTotalQuantity } from "../../utils/cart";

export function CheckoutHeader({ cart }) {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={LogoImage} />
            <img className="mobile-logo" src={MobileLogoImage} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link to="/checkout" className="return-to-home-link">
            {cartTotalQuantity(cart)} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={CheckoutLockIconImage} />
        </div>
      </div>
    </div>
  );
}
