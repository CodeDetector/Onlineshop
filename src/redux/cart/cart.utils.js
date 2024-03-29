export const addItemToCart=(cartItems,cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>
        cartItem.id===cartItemToAdd.id
    )

    if(existingCartItem)
    {
        return(
            cartItems.map(cartItem=>
                cartItem.id===existingCartItem.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem
            )
        )
    }
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}

export const removeAnItemFromTheCart=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id)

    if(existingCartItem)
    {
        if(cartItemToRemove.quantity>1)
        {
            return(
                cartItems.map(cartItem=>
                    cartItem.id===cartItemToRemove.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem
                )
            )
        }
        else{
            return(
                    
                       cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
                    
                )
        }
    }
}