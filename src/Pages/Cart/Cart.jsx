import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../../Components/ProductCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-3 mx-16 my-10">
        {cart.map((product, i) => (
          <ProductCart product={product} key={i}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;
