import { Link } from 'react-router-dom';

function Item(props) {
    const { id, title, price, img, discount } = props;

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
            <p>
                Price: ${price}
            </p>
        </section>
        <section>
            <p>
                Discount: ${discount}
            </p>
        </section>
        <footer>
            <Link to={`/item/${id}`}>Details</Link>
        </footer>
    </article>
  )
}

export default Item
