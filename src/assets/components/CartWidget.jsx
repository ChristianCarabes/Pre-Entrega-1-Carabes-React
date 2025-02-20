import { useContext } from "react";
import cartContext from "../context/CartContext";

export default function CartWidget() {
  
  const context = useContext(cartContext);
  console.log("Context--->", context);


  return (
    <div>
      
      <img src="/Cart.svg" width="50" height="50" alt="Cart" />
      <span className="cart-count">{context.countItemsInCart()}</span>
    </div>
  );
}
