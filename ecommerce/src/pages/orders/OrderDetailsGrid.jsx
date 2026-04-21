import { Fragment } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import { addToCart as addToCartUtil } from "../../utils/cart";

import BuyAgainImage from "../../assets/icons/buy-again.png";

export function OrderDetaisGrid({ order, loadCart }) {
  return (
    <div className="order-details-grid">
      {order.products.map(orderProduct => {
        const addToCart = async () => {
          await addToCartUtil(orderProduct.productId, 1);
          await loadCart();
        }

        return (
          <Fragment key={orderProduct.productId}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} alt={orderProduct.product.name} />
            </div>

            <div className="product-details">
              <div className="product-name">
                {orderProduct.product.name}
              </div>
              <div className="product-delivery-date">
                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
              </div>
              <div className="product-quantity">Quantity: {orderProduct.quantity}</div>
              <button className="buy-again-button button-primary"
                onClick={addToCart}
              >
                <img className="buy-again-icon" src={BuyAgainImage} />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <div className="product-actions">
              <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}