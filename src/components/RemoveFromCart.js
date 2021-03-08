import React from 'react';
import toast from 'react-hot-toast';
import {useShoppingCart} from 'use-shopping-cart';

function RemoveFromCart({product}) {
    const {removeItem, cartCount} = useShoppingCart();

    function _removeItem() {
        removeItem(product.id);
        toast.success(`${product.name} is removed from your cart.`);
    }

    return(
        <button onClick={_removeItem} disabled={!cartCount}>
            Remove from cart
        </button>
    )
}

export default RemoveFromCart;