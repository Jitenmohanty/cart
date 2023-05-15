import React from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((item) => {
        return (
          <CartItem
            products={item}
            key={item.id}
            increseQuantity={props.increseQuantity}
            decreseQuantity={props.decreseQuantity}
            onDeleteButton={props.onDeleteButton}
          />
        );
      })}
    </div>
  );
}

export default Cart;
