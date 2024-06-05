import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./checkout.css";

export const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="checkout">
      <h1>Order Summary</h1>
      <div className="checkout-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div className="checkout-item" key={product.id}>
                <p>
                  {product.productName} (x{cartItems[product.id]})
                </p>
                <p>${product.price * cartItems[product.id]}</p>
              </div>
            );
          }
        })}
      </div>
      <h2>Total: ${totalAmount}</h2>
    </div>
  );
};
