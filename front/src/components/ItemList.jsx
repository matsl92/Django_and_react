import { useAppContext } from "../context/AppContext";
import ListItem from "./ListItem";
import { useState, useEffect } from 'react';

function ItemList() {

    const { getProducts, products } = useAppContext();

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="container"> 
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 itemList under-navbar d-flex justify-content-center flex-direction-row">
                
                {
                    products.map((product, index) => (
                        <ListItem key={index} id={product.id} name={product.name} price={product.price} image={`http://127.0.0.1:8000/${product.image}`} description={product.description} />
                    ))
                }
            </div>
        </div>
    );
}

export default ItemList;