import React from 'react'
import {ReactComponent as Logo} from '../../assets/original.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart_icon/cart-icon.component'
import CartDropdown from '../cartdropdown/cart-dropdown.component'
import { selectCurrentUser, selectCartHidden } from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'



const Header=({currentUser,hidden})=>{
    return(
        <div className="header" >
           <div className="logo-container"> <Link to='/'>
                <Logo/>
            </Link> 
            </div>
            <div className="options">
                <Link to='/shop' style={{textDecoration:'none',color:'inherit'}}>
                    <div className="option">Shop</div>
                </Link>
                <div className="option" style={{cursor:'pointer'}}>Contacts</div>
                    {
                        currentUser?
                      <div className="option" onClick={()=>auth.signOut()} style={{cursor:'pointer'}}>Sign Out</div>:
                      <Link className="option" to='/signin' style={{textDecoration:'none',color:'inherit',cursor:'pointer'}}>Sign In</Link>
                    }
                    <CartIcon/>
            </div>
            {
                hidden?null:(<CartDropdown/>)
            }
        </div>
    )
}

const mapStateToProps=createStructuredSelector({
            currentUser:selectCurrentUser,
            hidden:selectCartHidden
        }
)

export default connect(mapStateToProps)(Header);