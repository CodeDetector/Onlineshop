import React from 'react'
import {connect} from 'react-redux'
import {removeItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

import './checkout-item.styles.scss'

const CheckOutItem=({cartItem,removeItem,removeItemFromCart,addItem})=>
{
    const {name,price,quantity,imageUrl}=cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity" >
            <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10096;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10097;</div>
        </span>  
        <span className="price">${price}</span>
        <div className="remove-button" onClick={()=>removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
)
}
const mapDispatchToProps=(dispatch)=>(
    {
        removeItemFromCart:item=>dispatch(removeItemFromCart(item)),
        addItem:item=>dispatch(addItem(item)),
        removeItem:item=>dispatch(removeItem(item)),
    }
)


export default connect(null,mapDispatchToProps)(CheckOutItem)