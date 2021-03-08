import React from 'react';
import toast from 'react-hot-toast';
import {useShoppingCart} from 'use-shopping-cart';

function AddToCart({product}) {

    const {addItem, cartCount, cartDetails, totalPrice} = useShoppingCart();
    // const {cartCount, cartDetails, totalPrice} = useShoppingCart();

    function _addItem() {
        addItem(product);
        toast.success(`${product.name} is added to your card`);
      }

    console.log({cartCount, cartDetails, totalPrice});

    return(
        <button onClick={_addItem}>
            AddToCart
        </button>
    )
}

export default AddToCart;