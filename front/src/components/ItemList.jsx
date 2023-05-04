import ListItem from "./ListItem";
import { useState, useEffect } from 'react';

function ItemList() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/product/list');
        const data = await response.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])


    
    console.log(products);

    return (

        <div className="itemList">
            <h1>Products</h1>
            {
                products.map((product, index) => (
                    <ListItem key={index} name={product.name} price={product.price} image={`http://127.0.0.1:8000/${product.image}`} description={product.description} />
                ))
            }
        </div>
    );
}

export default ItemList;