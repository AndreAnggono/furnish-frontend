import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";
import useCart from "../utils/useCart";

function AddToCart({ product }) {
	// also can call cartCount, cartDetails, totalPrice from useShoppingCart();
    const {addItem} = useShoppingCart();

    // const {cartItems, addItem} = useCart();
    // console.log(cartItems);

    function _addItem() {
        addItem(product);
        toast.success(`${product.name} is added to your card`);
    }

    return(
        <button onClick={_addItem}>
            AddToCart
        </button>
    )
}

export default AddToCart;
