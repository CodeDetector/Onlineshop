import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../customButton/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
// import checkOut from '../../Pages/checkout/checkout.component'
import {withRouter} from 'react-router-dom'

const CartDropdown=({cartItems,history,dispatch})=>{
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length>0?
                    cartItems.map(cartItem=>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )):
                    <span className="empty-msg">Your cart is empty</span>
                }
            </div>
            {console.log(history.push)}
            <CustomButton onClick={()=>
               { history.push('/checkout')
                dispatch(toggleCartHidden())}}>CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps=createStructuredSelector(
    {
       cartItems :selectCartItems
    }
)
export default withRouter(connect(mapStateToProps)(CartDropdown));