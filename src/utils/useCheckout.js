import axios from "axios";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

function useCheckout() {
    const {redirectToCheckout, cartDetails} =  useShoppingCart();

    async function _handleCheckout() {
        const session = await axios.post('/checkout-sessions', cartDetails)
            .then(res => res.data)
            .catch(error => {
                toast.error('Checkout failed!');
                console.log('Error during checkout: ', error);
            })

        if (session) {
            redirectToCheckout({sessionId: session.id});
        }
    }
    return _handleCheckout;
}

export default useCheckout;