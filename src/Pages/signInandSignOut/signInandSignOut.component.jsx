import React from 'react'
import './signInandSignOut.styles.scss'
import SignIn from '../../components/SignIn/signIn.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInandSignUp=()=>{
    return(
        <div className="SignInandSignUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInandSignUp;