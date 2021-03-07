import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './Header'
import Home from './Home';
import ProductsIndex from './ProductsIndex';
import ProductShow from './ProductShow';
import Sidebar from './Sidebar';
import UserShow from './UserShow';
import CheckoutCart from './CheckoutCart';

function App(props) {

	return (
		<>
			<BrowserRouter>
				<Header/>
				<Sidebar/>
				<div className="container">
					<Switch>

						<Route exact path='/' component={() => <Home/>} />

						<Route exact path='/products' component={(props) => <ProductsIndex {...props} />} />
						<Route exact path='/product/:product_id' component={(props) => <ProductShow {...props}/>} />
						<Route exact path='/checkout' component={(props) => <CheckoutCart {...props}/>} />

						<Route exact path='/user/:user_id' component={() => <UserShow/>} />

					</Switch>
				</div>
			</BrowserRouter>
		</>
	) 
}

export default App;
