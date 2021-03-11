import React from 'react';
import AddToCart from './AddToCart';
import RemoveFromCart from './RemoveFromCart';

function CheckInStock({product}) {

    if (product.qty === 0) {
        return(
            <p style={{color:"red"}}>⦿ Out of stock</p>
        )
    } else if (product.qty > 0 && product.qty <= 10) {
        return(
            <>
                <p style={{color:"orange"}}>⦿ Low in stock ({product.qty})</p>
                <AddToCart product={product}/>
                <RemoveFromCart product={product}/>
            </>
        )
    } else {
        return(
            <>
                <p style={{color:"green"}}>⦿ In stock ({product.qty})</p>
                <AddToCart product={product}/>
                <RemoveFromCart product={product}/>
            </>
        )
    }
    
}

export default CheckInStock