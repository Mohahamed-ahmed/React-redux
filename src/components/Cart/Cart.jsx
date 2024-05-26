import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let total = 0;
  const content = cartItems.map((cartItem) => {
    total = cartItem.quantity * cartItem.price;
    return (
      <CartItem
        key={cartItem.id}
        item={{
          id: cartItem.id,
          title: cartItem.title,
          quantity: cartItem.quantity,
          total: total,
          price: cartItem.price,
        }}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{content}</ul>
    </Card>
  );
};

export default Cart;
