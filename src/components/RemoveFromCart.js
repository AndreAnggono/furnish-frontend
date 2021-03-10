import React from 'react';
import toast from 'react-hot-toast';
import {useShoppingCart} from 'use-shopping-cart';

function RemoveFromCart({product}) {
    const {removeItem, cartDetails} = useShoppingCart();

    function _removeItem() {
        removeItem(product.id);
        toast.success(`${product.name} is removed from your cart.`);
    }
    
    const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

    const productInCart = cartItems.find(item => item.id === product.id);

    return(
        <button onClick={_removeItem} disabled={!productInCart}>
            Remove from cart
        </button>
    )
}

export default RemoveFromCart;