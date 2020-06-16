import React from 'react'
import './custom-button.styles.scss'
import {connect} from 'react-redux'


const CustomButton=({children,isGoogleSignIn,invert,functionalityOfButton,...otherprops})=>{
return(
    <button className={`${invert?'invert':''} ${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherprops} disabled={functionalityOfButton}>
            {children}
    </button>
)
}

const mapstateToProps=({cart})=>{
    return(
        {
            functionalityOfButton:cart.cartItems?false:true
        }
    )
}

export default connect(mapstateToProps)(CustomButton);