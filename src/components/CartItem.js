import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

function CartItem({cartItem}) {
    const {setItemQuantity} = useShoppingCart();

    function _setItemQuantity(event) {
        setItemQuantity(cartItem.id, event.target.value);
    }
    return(
        <>
            <h2>{cartItem.name}</h2>
            <img src={cartItem.image} alt="" className="product__image-thumbnail" />
            <p>Price: ${cartItem.price} x {cartItem.quantity} </p>
            <p>Color: {cartItem.color}</p>
            <div>
                <input
                    type="number"
                    value={cartItem.quantity}
                    onChange={_setItemQuantity}
                    min={0}
                    max={cartItem.qty}
                />
            </div>
        </>
    )
}

export default CartItem;