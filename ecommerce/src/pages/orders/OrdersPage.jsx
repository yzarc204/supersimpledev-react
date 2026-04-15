import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header";

import "./OrdersPage.css";
import FavIcon from "../../assets/images/orders-favicon.png";
import { OrdersGrid } from "./OrderGrids";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }

    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/png" href={FavIcon} />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
