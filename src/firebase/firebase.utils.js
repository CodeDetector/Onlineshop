import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={
    apiKey: "AIzaSyB8BvjApOdfcxTQqetoJFOqH1Kw82Me5gI",
    authDomain: "crwn-db-6a0d6.firebaseapp.com",
    databaseURL: "https://crwn-db-6a0d6.firebaseio.com",
    projectId: "crwn-db-6a0d6",
    storageBucket: "crwn-db-6a0d6.appspot.com",
    messagingSenderId: "897806881267",
    appId: "1:897806881267:web:0ff72eec843dfce55a0286",
    measurementId: "G-WWHY8VRS98"
  };

  export const createUserProfileDocument=async (userAuth,otherAdditionalDetails)=>{
    if(!userAuth)return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    const userSnapShot=await userRef.get(); 
    console.log(userSnapShot);
    if(!userSnapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...otherAdditionalDetails
        })
      }catch(error){
        console.log(error.message);
        }
      }
      return userRef;
  }
  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const SignInwithGoogle=()=>auth.signInWithPopup(provider);
  // firebase.auth().signInWithPopup(provider).then(result=>{
  //   var user=result.user;
  //   console.log(user);

  
  export default firebase;