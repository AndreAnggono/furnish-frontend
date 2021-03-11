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
  
    if (isLoading) return <h1>Loading...</h1>

    if (!data && !isLoading) return <h1>No purchase found.</h1>

    if (isError) return <h1>Error loading page</h1>

    

    return(
        <>
            <h1>Thank you for purchasing</h1>
            <p>Email: {data.checkoutSession.customer_details.email}</p>
            <p>Order total: ${data.checkoutSession.amount_total / 100}</p>
        </>
    )
}

export default SuccessCheckout;