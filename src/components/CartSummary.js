import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import CartModal from './CartModal';

function CartSummary() {
    const {totalPrice, cartCount} = useShoppingCart();

    const [isOpen, setOpen] = useState(false);

    const toggleModal = () => setOpen(!isOpen);

    return(
        <>
            <div onClick={toggleModal} className="user-nav__icon-box">
                <svg className="user-nav__icon">
                    <use xlinkHref="../../img/sprite.svg#icon-shopping-cart"></use> 
                </svg>
                <span className="user-nav__notification">{cartCount}</span>
                <span>${totalPrice}</span>
            </div>
            
            <CartModal isOpen={isOpen} toggleModal={toggleModal} />
        </>

    )
}

export default CartSummary;