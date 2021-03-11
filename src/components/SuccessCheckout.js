import axios from 'axios';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import {ROOT} from '../config/serverData';


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

    if (isLoading) return <div className="loading">Loading...</div>;

    if (!data && !isLoading) return <h1>No purchase found.</h1>

    if (isError) return <h1>Error loading page</h1>

    const {customer_details, amount_total, payment_intent} = data.checkoutSession;
    const priceDetails = data.listLineItems;
    
    const items = 
        data.productDetails.map((item, index) => 
            <div key={item.id}>  
                <p><strong>{item.name.toUpperCase()}</strong></p>
                <p>${priceDetails[index].price.unit_amount/100} x {priceDetails[index].quantity} = ${priceDetails[index].amount_total/100}</p>
                <img src={item.images[0]} className="product__image-thumbnail" alt="furniture"/>
            </div>
        )

    return(
        <>
            <h1>Thank you for purchasing</h1>
            <p>Email: {customer_details.email}</p>
            <p>Order total: ${amount_total / 100}</p>
            <a href={payment_intent.charges.data[0].receipt_url} target='_blank' rel="noreferrer" >Online receipt</a>
            {items}
        </>
    )
}

export default SuccessCheckout;