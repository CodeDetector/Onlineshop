import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../customButton/custom-button.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            Name:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async(event)=>{
        event.preventDefault();
        const {Name,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword)
        {
            alert('Password not matched')
            return;
        }
        if(password.length<6)
        {
            alert('password must be atleast 6 characters long');
            return;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{Name});
            this.setState=({
                Name:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.log(error);
            }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        const {Name,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">Create New Account</h2>
                <span>SignUP</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name='Name' 
                    value={Name} 
                    onChange={this.handleChange}
                    label='Name' 
                    required>
                    </FormInput>
                    <FormInput 
                    type="email" 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange}
                    label='Email' 
                    required>
                    </FormInput>
                    <FormInput 
                    type="password" 
                    name='password' 
                    value={password} 
                    onChange={this.handleChange}
                    label='Password' 
                    required>
                    </FormInput>
                    <FormInput 
                    type="password" 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={this.handleChange}
                    label='Confirm Password' 
                    required>
                    </FormInput>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp