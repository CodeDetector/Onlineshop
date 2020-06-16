import React from 'react'

import {connect} from 'react-redux';

import './item.styles.scss'

import {addItem} from '../../redux/cart/cart.actions'
import CustomButton from '../../components/customButton/custom-button.component'

const Item=({item,addItem})=>{
    const {id,name,price,imageUrl}=item;
    return(
        <div key={id} className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} invert>
                ADD TO CART
            </CustomButton> 
        </div>
)}

const mapDispatchToProps=dispatch=>({
    addItem:(item)=>dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(Item) ;