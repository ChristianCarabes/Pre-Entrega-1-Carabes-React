import { useContext } from "react";
import cartContext from "../context/CartContext";

function CartContainer() {
  const { cartItems, removeItem } = useContext(cartContext);


  return (
    <div>
      <h1>Tu carrito</h1>
      {cartItems.map((item) => (
        <>
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

export default CartContainer;