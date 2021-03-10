import React from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import useCheckout from '../utils/useCheckout';

function CheckoutCart({user}) {
    let history = useHistory();
    const _handleCheckout = useCheckout(user);

    const redirToLogin = () => {
        toast.loading('Please Sign In/Sign Up before checkout', {duration: 1500});
		history.push("/login");
	};

    const {cartCount, cartDetails} = useShoppingCart();

    console.log(cartDetails);

    const cartItemIds = Object.keys(cartDetails);

	const checkStock = () => {
        // if (cartItemIds.length !== 0) {
		// Object.keys(cartDetails).map(key => {
		// 	const item = cartDetails[key];
		// 	console.log(item);
		// 	if (item.qty < item.quantity) {
		// 		return toast.error(`Not enough stock for item ${item.name} (${item.qty} in stock)`);
		// 	}
		// })
	    // }
    }
    
    return(
        <button onClick={user? checkStock && _handleCheckout : redirToLogin} 
            disabled={!cartCount}
            className="user-nav__icon-box">
            <span>Checkout now</span>
            <svg className="user-nav__icon">
                <use xlinkHref="../../img/sprite.svg#icon-check"></use> 
            </svg>
        </button>
    )
}

export default CheckoutCart;