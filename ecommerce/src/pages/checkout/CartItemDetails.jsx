import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useEffect, useRef, useState } from "react";

export function CartItemsDetails({ cartItem, loadCart }) {
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(Number(cartItem.quantity));
  const inputRef = useRef(null);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  const editCartQuantity = () => {
    setIsEditingQuantity(true);
  }

  const cancelEditCartQuantity = () => {
    setIsEditingQuantity(false);
  }

  const updateCartQuantity = async () => {
    if (!isEditingQuantity) {
      return editCartQuantity();
    }

    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity)
    });
    setIsEditingQuantity(false);
    await loadCart();
  }

  const handleInputKeydown = async (event) => {
    if (event.key === 'Enter') {
      await updateCartQuantity();
    }
    if (event.key === 'Escape') {
      cancelEditCartQuantity();
    }
  }

  useEffect(() => {
    if (isEditingQuantity) {
      inputRef.current?.focus();
    }
  }, [isEditingQuantity])

  return (
    <>
      <img
        className="product-image"
        src={cartItem.product.image}
      />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            {!isEditingQuantity ? (
              <span className="quantity-label">
                {cartItem.quantity}
              </span>
            ) : (
              <input
                type="number"
                value={quantity}
                className="edit-quantity"
                onChange={(event) => setQuantity(event.target.value)}
                onKeyDown={handleInputKeydown}
                ref={inputRef}
              />
            )}
          </span>
          <span className="update-quantity-link link-primary"
            onClick={updateCartQuantity}
          >
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </ >
  );
}