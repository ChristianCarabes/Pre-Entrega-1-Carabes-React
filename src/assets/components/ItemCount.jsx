import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={decrement} disabled={quantity <= initial}>➖</button>
                <h4>{quantity}</h4>
                <button onClick={increment} disabled={quantity >= stock}>➕</button>
            </div>
            <button onClick={() => onAdd(quantity)} disabled={stock === 0 || quantity === 0}>
                Add to the cart
            </button>
        </div>
    );
}

export default ItemCount;

