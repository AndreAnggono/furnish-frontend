import axios from 'axios';
import React, {useEffect, useState} from 'react';
import serverURL from '../config/database';

function ProductShow({match}) {
    const [product, setProduct] = useState('');

    const productURL = (id) => {
        return serverURL + `products/${id}`
    }
    const id = match.params.product_id;

    useEffect(() => {
        async function fetchProduct () {
        const response = await axios.get(productURL(id));
        // productObj = response.data;
        setProduct(response.data);
        }
        fetchProduct();
    }, []);


    if (!product) {
        return null;
    }
    // @ts-ignore
    const {name, description, price, color, style, categories, image} = product;
    const showCategories = categories.map(category => (
        <li key={category}>{category}</li>
    ))

    return (
        <>
            <h1>{name}</h1>
            <img className="product__image" src={image} alt=""/>

            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Color: {color}</p>
            <p>Style: {style}</p>
            <ul>Categories: {showCategories}</ul>
        </>
    )
}

export default ProductShow