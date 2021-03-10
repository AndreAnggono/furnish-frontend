import React from 'react';
import Modal from 'react-modal';
import { useShoppingCart } from 'use-shopping-cart';
import useCheckout from 'utils/useCheckout';
import CartItem from './CartItem';
import CheckoutCart from './CheckoutCart';

Modal.setAppElement('#root');

function CartModal({isOpen, toggleModal, user}) {
    const {cartCount, totalPrice, cartDetails} = useShoppingCart();
    const _handleCheckout = useCheckout(user);
    

    const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

    const showCartItems = cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
    ))

    return(
        <Modal isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Cart Modal" 
            closeTimeoutMS={500}
        >
            <div>
                Cart Summary: ${totalPrice} ({cartCount} Items)
            </div>

            <hr />
            {showCartItems}
            
            <CheckoutCart user={user}/>
            <button onClick={toggleModal}>
                Still Shopping
            </button>
             
        </Modal>
    )
}

export default CartModal;