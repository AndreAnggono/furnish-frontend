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
            <div key={item.id} className="product__body" >  
                <div>
                    <p><strong>{item.name.toUpperCase()}</strong></p>
                    <p>${priceDetails[index].price.unit_amount/100} x {priceDetails[index].quantity} = ${priceDetails[index].amount_total/100}</p>
                </div>

                <div>
                    <img src={item.images[0]} className="product__image-thumbnail" alt="furniture"/>
                </div>
            </div>
        )

    return(
        <div style={{textAlign: 'center'}}>
            <h1>Thank you for your purchase with Furnique</h1>
            
            <h5>Order details:</h5>
            
            <p>Email: {customer_details.email}</p>
            <p>Order total: <strong>${amount_total / 100}</strong></p>
            <p>Click to view your <a href={payment_intent.charges.data[0].receipt_url} target='_blank' rel="noreferrer" >Online receipt</a></p>
            {items}
            <h4 style={{textAlign: 'center'}}>Your products will be delivered within 3 working days.</h4>
            <h4 style={{textAlign: 'center'}}>Have a great journey with our new products!</h4>
        </div>
    )
}

export default SuccessCheckout;