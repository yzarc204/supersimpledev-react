export function cartTotalQuantity(cart) {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return totalQuantity;
}