import React from "react";
import { useShoppingCart } from "use-shopping-cart";

function CartItem({ cartItem }) {
	const { setItemQuantity } = useShoppingCart();

    function _setItemQuantity(event) {
        setItemQuantity(cartItem.id, event.target.value);
    }
    return(
        <div className="product__body" style={{alignItems: 'flex-end'}}>
            <div>
                <h2 className="product__name">{cartItem.name}</h2>
                <p className="product__price">${cartItem.price} x {cartItem.quantity} </p>
                <p>Color: {cartItem.color}</p>
                <p> ⦿ In stock ({cartItem.qty}) </p>
                <input
                    type="number"
                    value={cartItem.quantity}
                    onChange={_setItemQuantity}
                    min={0}
                    max={cartItem.qty}
                    style={{height: '2.1rem', fontSize: '1.6rem', color: 'grey', textAlign: 'center'}}
                />
            </div>

            <div>
                <img src={cartItem.image} alt="" className="product__image-thumbnail" />
            </div>

        </div>
    )
}

export default CartItem;
