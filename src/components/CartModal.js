import React from 'react';
import Modal from 'react-modal';
import { useShoppingCart } from 'use-shopping-cart';
import CartItem from './CartItem';
import CheckoutCart from './CheckoutCart';

Modal.setAppElement('#root');

function CartModal({isOpen, toggleModal, user}) {
    const {cartCount, totalPrice, cartDetails} = useShoppingCart();

    const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])

    const showCartItems = cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
    ))

    const _onSubmit = (event) => {
        event.preventDefault();
    }


    return(
        <Modal isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="Cart Modal" 
            closeTimeoutMS={500}
        >
            <form onSubmit={_onSubmit}>
                <div style={{textAlign: "center", margin: '7px'}}>
                    Cart Summary: ${totalPrice} ({cartCount} Items)
                </div>

                <hr />
                {showCartItems}
                <div style={{textAlign: 'center'}}>
                    <div className="btn btn__green" style={{width: '30rem', margin: '0 auto'}}>
                        <CheckoutCart content={"Checkout now"} user={user} />
                    </div>
                    
                    <button className="btn btn__black" style={{borderRadius: '5px', width: '30rem'}} onClick={toggleModal}>
                        Still Shopping
                    </button>
                </div>
                
            </form>
             
        </Modal>
    )
}

export default CartModal;