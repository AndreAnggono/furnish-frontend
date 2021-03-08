import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import useCheckout from '../utils/useCheckout';

function CheckoutCart() {
    const _handleCheckout = useCheckout();
    const {cartCount} = useShoppingCart();
    return(
        
        <button onClick={_handleCheckout} 
            disabled={!cartCount}
        
            className="user-nav__icon-box">
            <svg className="user-nav__icon">
                <use xlinkHref="../../img/sprite.svg#icon-check"></use> 
            </svg>
            <span>Checkout</span>
        </button>
    )
}

export default CheckoutCart;