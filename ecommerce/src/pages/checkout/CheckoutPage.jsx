import { useEffect, useState } from "react";
import axios from "axios";

import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

import "./CheckoutPage.css";
import FavIcon from "../../assets/images/cart-favicon.png";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios
      .get("/api/payment-summary")
      .then((response) => {
        console.log(response.data);
        setPaymentSummary(response.data);
      });
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/png" href={FavIcon} />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
