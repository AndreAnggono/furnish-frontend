import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from "use-shopping-cart";

import {ROOT, LOGGED_IN} from '../config/serverData';


function useQueryString() {
    return new URLSearchParams(useLocation().search);
}

function SuccessCheckout () {
    const queryString = useQueryString();
    const sessionId = queryString.get('session_id');

    const {data, isLoading, isError} = useQuery('Result', () => sessionId 
        ? axios(ROOT + `/checkout-sessions/${sessionId}`).then(res => res.data) 
        : null
    );

    console.log(data);

    const {cartDetails} = useShoppingCart();
    
    console.log(cartDetails);
    // let productsToSave = [];
    // // [{productId, qty, price}];
    // const productArray = Object.keys(cartDetails).map(key => cartDetails[key]);

    // productArray.map(product => {
        
    // })
        
    // console.log('productArray', productArray);

    
    // const [userId, setUserId] = useState("");
    // const userData = async () => {
	// 	const response = await axios.get(LOGGED_IN, { withCredentials: true });
    //     return response;
	// };
    
    // useEffect(() => {
        
    //     // console.log((await userData()).data.user.id);
    //     createSale();
    //     console.log("CREATESALE");
    // }, []);

    // const item = [ { 'item': '60441d848c6160745255c49d', 'qty': '2', 'price': '15' } ]
    // const createSale = () => {
    //     axios.post(ROOT + '/create-sale', {
    //         'user': '60445ca0e38b037e44248754', item
    //     })
    // }

    if (isLoading) return <h1>Loading...</h1>

    if (!data && !isLoading) return <h1>No purchase found.</h1>

    if (isError) return <h1>Error loading page</h1>

    const {customer_details, amount_total, payment_intent} = data.checkoutSession;
    const priceDetails = data.listLineItems;
    
    const items = 
        data.productDetails.map((item, index) => 
            <div key={item.id}>  
                <p><strong>{item.name.toUpperCase()}</strong></p>
                <p>${priceDetails[index].price.unit_amount/100} x {priceDetails[index].quantity} = ${priceDetails[index].amount_total/100}</p>
                <img src={item.images[0]} className="product__image-thumbnail"/>
            </div>
        )

    return(
        <>
            <h1>Thank you for purchasing</h1>
            <p>Email: {customer_details.email}</p>
            <p>Order total: ${amount_total / 100}</p>
            <a href={payment_intent.charges.data[0].receipt_url} target='_blank'>Online receipt</a>
            {items}
        </>
    )
}

export default SuccessCheckout;