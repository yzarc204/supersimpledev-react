import axios from "axios";

export function cartTotalQuantity(cart) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return totalQuantity;
}

export async function addToCart(productId, quantity = 1) {
  await axios.post("/api/cart-items", {
    productId,
    quantity
  });
}