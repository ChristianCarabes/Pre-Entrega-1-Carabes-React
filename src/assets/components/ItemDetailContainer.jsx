import { useEffect, useState } from "react";
import { getProductById } from "../../data/getAsyncData";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        const id = Number(itemId);
        let isMounted = true;

        getProductById(id)
            .then(response => {
                if (isMounted) {
                    setProduct(response);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error("Error fetching product:", error);
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [itemId]);

    if (loading) return <p>Loading...</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;



