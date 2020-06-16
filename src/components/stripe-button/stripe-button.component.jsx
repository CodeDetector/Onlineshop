import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton=({price})=>{
    const publisherKey='pk_test_51GsXWZI9iaJDOSvKgWjvU51nOzAsYx2juAmyE5aOIEeB4FDsPFU4Ffx26Cr5QB5F2ct9sAAcxmOaAQeWXX2pmajq00mkZTTBZD'
    const PriceForStripe=price;
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
        label="Make Payment"
        name="CRWN Clothing Ltd."
        currency="INR"
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${PriceForStripe}`}
        amount={PriceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publisherKey}
        shippingAddress
        billingAddress={false}
        />
    )
}

export default StripeCheckoutButton