import { Link } from "react-router";

import { Header } from "../components/Header";
import { formatMoney } from "../utils/money";

import "./OrdersPage.css";
import BuyAgainImage from "../assets/icons/buy-again.png";
import FavIcon from "../assets/images/orders-favicon.png";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import dayjs from "dayjs";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get('/api/orders?expand=products')
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/png" href={FavIcon} />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map(order => {
            return (
              <div className="order-container" key={order.id}>
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.estimatedDeliveryTimeMs).format('MMMM D')}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map(orderProduct => {
                    return (
                      <Fragment key={orderProduct.id}>
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
                          <div className="product-quantity">Quantity: 1</div>
                          <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src={BuyAgainImage} />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
