import axios from "axios";
import toast from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import { stripePromise } from "../components/App";
import { CHECKOUT } from "../config/serverData";

function useCheckout(user) {
	const { cartDetails } = useShoppingCart();

	async function _handleCheckout() {
		const session = await axios
			.post(CHECKOUT, { cartItems: cartDetails, user: user })
			.then((res) => res.data)
			.catch((error) => {
				toast.error("Checkout failed!");
				console.log("Error during checkout: ", error);
			});

		if (session) {
			localStorage.removeItem('persist:root');
			const stripeObj = await stripePromise;
			stripeObj.redirectToCheckout({ sessionId: session.id });
		}
	}
	return _handleCheckout;
}

export default useCheckout;
