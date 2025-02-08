import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/getAsyncData';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
    const {greeting} = props;

    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();
  

    useEffect(() => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts;
      
      asyncFunc(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    }, [categoryId])

  return (
    <div>
       <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
