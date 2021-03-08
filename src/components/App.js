import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import dotenv from "dotenv";
import { QueryClientProvider, QueryClient } from "react-query";

import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductShow from "./ProductShow";
import Sidebar from "./Sidebar";
import UserShow from "./UserShow";
import CheckoutCart from "./CheckoutCart";
import { CartProvider } from "use-shopping-cart/dist/react";
import Login from "./auth/Login";

dotenv.config();

const queryClient = new QueryClient();

// console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const stripePromise = loadStripe("pk_test_51IQkAPA74VPmdiQEYANYUSHAGYpGzebZ4QPFaSlBV0JDtOTeocq6C0AVWs6kKdj7SM5nGjQjmb4G7c97pbe25gGn00jIfBifih");

function App(props) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<CartProvider mode="checkout-session" stripe={stripePromise} currency="AUD">
					<BrowserRouter>
						<Header />
						<Sidebar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={() => <Home />} />

								<Route exact path="/products" component={(props) => <ProductList {...props} />} />
								<Route exact path="/product/:product_id" component={(props) => <ProductShow {...props} />} />
								<Route exact path="/checkout" component={(props) => <CheckoutCart {...props} />} />

								<Route path="/login" component={(props) => <Login {...props} />} />

								<Route exact path="/user/:user_id" component={() => <UserShow />} />
							</Switch>
						</div>
					</BrowserRouter>
				</CartProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
