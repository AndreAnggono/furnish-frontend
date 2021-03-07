import serverURL from '../config/database';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsIndex({history}) {
    const [products, setProducts] = useState('');

    useEffect(() => {
        const productsURL = serverURL + 'products';
        async function fetchProduct () {
        const response = await axios.get(productsURL);
        // productObj = response.data;
        setProducts(response.data);
        }
        fetchProduct();
    }, []);

    if (!products) {
        return <div>Loading...</div>
    }

    // @ts-ignore
    const productList = products.map(product => {
        const {name, description, price, color, style, categories, image} = product;
        const showCategories = categories.map(category => (
            <li key={category}>{category}</li>
        ));
        return(
            <div key={product.id}> 

            <Link to={`product/${product.id}`} >
                <img className="product__image-thumbnail" src={image} alt=""/>
            </Link>
            <p><strong>{name}</strong></p>
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Color: {color}</p>
            <p>Style: {style}</p>
            <ul>Categories: {showCategories}</ul>
            </div>
        ) 
    });

    return (
        <>
            <h1>All Products</h1>
            {productList}
        </>
    )
}

export default ProductsIndex