import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

function AddToCart({ product }) {
	// also can call cartCount, cartDetails, totalPrice from useShoppingCart();
    const {addItem} = useShoppingCart();

    function _addItem() {
        addItem(product);
        toast.success(`${product.name} is added to your card`);
    }

    return(
        <>
            <button className="btn btn__blue dark" onClick={_addItem}>
                AddToCart
            </button>
        </>
        
    )
}

export default AddToCart;
