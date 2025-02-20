import { useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import cartContext from '../context/CartContext';


function ItemDetail(props) {
    const { id, title, price, stock, img, category, discount } = props;

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(cartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

  return (
    <article>
        <header>
            <h2>
                {title}
            </h2>
        </header>
        <picture>
            <img src={img} alt={title} />
        </picture>
        <section>
            ID: {id}
        </section>
        <section>
            <p>
                Price: ${price}
            </p>
        </section>
        <section>
            <p>
                Stock available: {stock}
            </p>
        </section>
        <section>
            <p>
                Category: {category}
            </p>
        </section>
        <section>
            <p>
                Discount: ${discount}
            </p>
        </section>
        <footer>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart'>Finish shopping</Link>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                )
            }
        </footer>
    </article>
  )
}

export default ItemDetail
