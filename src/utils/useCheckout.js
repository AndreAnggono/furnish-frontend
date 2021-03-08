import axios from "axios";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";
import { stripePromise } from "../components/App";

function useCheckout() {
    const {cartDetails} =  useShoppingCart();

    async function _handleCheckout() {
        const session = await axios.post('http://localhost:3000/checkout-sessions', cartDetails)
            .then(res => res.data)
            .catch(error => {
                toast.error('Checkout failed!');
                console.log('Error during checkout: ', error);
            })

        if (session) {
            console.log(session);
            const stripeObj = await stripePromise;
            stripeObj.redirectToCheckout({sessionId: session.session.id});
        }
    }
    return _handleCheckout;
}

export default useCheckout;