import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ROOT } from "../config/serverData";
import CheckInStock from './CheckInStock';


function ProductList({history}) {
    const [products, setProducts] = useState('');

    useEffect(() => {
        async function fetchProduct () {
        const response = await axios.get(ROOT + '/products');
        setProducts(response.data);
        }
        fetchProduct();
    }, []);

    if (!products) {
        return <div className="loading">Loading...</div>
    }

    // @ts-ignore
    const productList = products.map(product => {
        const {name, description, price, color, style, categories, image} = product;
        const showCategories = categories.map(category => (
            <li className="product__categories-item" key={category}>{category}</li>
        ));
        return(
            <div className="product__card" key={product.id}> 

                <Link to={`product/${product.id}`} >
                    <img className="product__image-thumbnail" src={image} alt="furniture"/>
                </Link>
                <div className="product__card-lower">
                    <p className="product__style">{style}</p>
                    <Link to={`product/${product.id}`} >
                        <p className="product__name">{name}</p>
                    </Link>

                    <p className="product__price">${price}</p>
                    
                    <p className="product__description">{description}</p>
                    
                    <p className="product__color">Color: {color}</p>
                    
                    <ul className="product__categories">Categories: {showCategories}</ul>
                    <CheckInStock product={product} />
                </div>
            </div>
        ) 
    });

    return (
        <div>
            <h1>All Products</h1>
            <div className="product__body">
                {productList}
                {productList}
            </div>
        </div>
        
    )
}

export default ProductList