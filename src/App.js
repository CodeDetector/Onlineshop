import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component'
import Shop from '../src/Pages/shopPage/shop.page.component'
import {Route, Switch,Redirect} from 'react-router-dom'
import Header from './components/Header/header.component'
import SignInandSignUp from  './Pages/signInandSignOut/signInandSignOut.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import { setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import checkOut from './Pages/checkout/checkout.component';

class App extends React.Component {

  unsubscribeFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribefromAuth=auth.onAuthStateChanged(async userAuth=>{
     if(userAuth)
     { 
       const userRef=createUserProfileDocument(userAuth);
       (await userRef).onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
        })      
     }
     else
     {
      setCurrentUser(userAuth);
     }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):<SignInandSignUp/>} />
        <Route exact path="/checkout" component={checkOut}/>
      </Switch>
    </div>
  );
  } 
};

const mapStateToProps=createStructuredSelector({
      currentUser:selectCurrentUser
  });

const mapDispatchToProps=dispatch=>{
  return(
    {
      setCurrentUser:(user)=>dispatch(setCurrentUser(user))
    } 
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
