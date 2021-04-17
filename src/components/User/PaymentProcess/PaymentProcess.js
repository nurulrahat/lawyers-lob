import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCard from './SimpleCard';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie3odCKa19Nu1Rc1TfnMEjWuJWcsNjHJuqrtqikmcxAMh1AcJ2LFWkjgkLvKOB4YgIyRMHyJ444mbf92xfEdniu00HS0xwwtV');

const PaymentProcess = ({handleBookingInfo}) => {
    return (
        <Elements stripe={stripePromise}>
           <SimpleCard bookingInfo={handleBookingInfo}></SimpleCard>
        </Elements>
    );
};

export default PaymentProcess;