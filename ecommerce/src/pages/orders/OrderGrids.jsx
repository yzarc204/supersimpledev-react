import { OrderDetaisGrid } from "./OrderDetailsGrid";
import { OrderHeader } from "./OrderHeader";

export function OrdersGrid({ orders, loadCart }) {
  return (<div className="orders-grid">
    {orders.map(order => {
      return (
        <div className="order-container" key={order.id}>
          <OrderHeader order={order} />
          <OrderDetaisGrid order={order} loadCart={loadCart} />
        </div>
      )
    })}
  </div>);
}