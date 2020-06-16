import {createSelector} from 'reselect'

//inputselector nad outputSelector

//input Selector

const selectCart=state=>state.cart;//selecting the cartItems array from the cart state

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((netQuantity,cartItem)=>netQuantity+cartItem.quantity,0)
)

export const selectCartTotal=createSelector(
    
        [selectCartItems],
        cartItems=>cartItems.reduce((netQuantity,cartItem)=>netQuantity+cartItem.quantity*cartItem.price,0)
    
)