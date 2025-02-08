import Item from './Item';

function ItemList(props) {
    const {products} = props;

  return (
    <div>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList
