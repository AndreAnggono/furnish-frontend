import React, {useState, useEffect} from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useShoppingCart } from 'use-shopping-cart';
import useCheckout from '../utils/useCheckout';

function CheckoutCart({user}) {
    const {cartCount, cartDetails} = useShoppingCart();
    let history = useHistory();
    const _handleCheckout = useCheckout(user);

    const [inStock, setInStock] = useState();

  

    const cartItemIds = Object.keys(cartDetails);

    

	const checkStock = (callback) => {
        if (cartItemIds.length !== 0) {
            let allInStock = true;

            Object.keys(cartDetails).map(key => {
                const item = cartDetails[key];
                if (item.qty < item.quantity) {
                    console.log("item.qty", item.qty, "item.quantity", item.quantity);
                    toast.error(`Not enough stock for item ${item.name} (${item.qty} in stock)`);
                    // item.quantity = item.qty;
                    console.log("SET STATE TO FALSE")
                    allInStock = false;
                } 
            })
            if (allInStock === true) {
                setInStock(true);
            }
            callback();
	    }
    }

    const redirectToLogin = () => {
        toast.loading('Please Sign In/Sign Up before checkout', {duration: 1600});
		history.push("/login");
	};


    const checkReady = () => {
        console.log("CLICKED");
        if (inStock === true && user) {
            console.log("CHEKCED");
            _handleCheckout();
        } else if (!user) {
            redirectToLogin();
        }
    }

    
    return(
        <button onClick={() => {
            checkStock(checkReady);
        }} 
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