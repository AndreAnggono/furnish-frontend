import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import AddToCart from './AddToCart';
import CartItem from './CartItem';
import RemoveFromCart from './RemoveFromCart';

function CheckInStock({product}) {

    

    if (product.qty === 0) {
        return(
            <p>⦿ Out of stock</p>
        )
    } else if (product.qty > 0 && product.qty <= 10) {
        return(
            <>
                <p>⦿ Low in stock ({product.qty})</p>
                <AddToCart product={product}/>
                <RemoveFromCart product={product}/>
            </>
        )
    } else {
        return(
            <>
                <p>⦿ In stock ({product.qty})</p>
                <AddToCart product={product}/>
                <RemoveFromCart product={product}/>
            </>
        )
    }
    
}

export default CheckInStock