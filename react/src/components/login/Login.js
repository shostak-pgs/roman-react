import React from 'react';
import './Login.css';
import {TextArea} from '../utils/CustomTags';
import {required, maxLengthCreator, minLengthCreator} from './../validator/CrUpdValidator';
import {Field, reduxForm } from 'redux-form';

const maxLength100 = maxLengthCreator(100);
const minLength6 = minLengthCreator(6);
const maxLength20 = maxLengthCreator(100);

let Login = (props) => {
    const handleSubmit = (formData) => {
        props.getUser(formData);
    }

    return(
        <div>
            <h3>Login to the Currency Rate</h3>
            <LoginReduxForm onSubmit = {handleSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return(
        <form onSubmit = {props.handleSubmit}>
            <div><Field placeholder = {'Email'} name = {'email'} component = {TextArea}
                        validate = {[required, maxLength100]} className = {'loginInput'} /></div>
            <div><Field placeholder = {'Password'} type = 'password' name = {'password'} component = {TextArea}
                        validate = {[required, maxLength20, minLength6]} className = {'loginInput'} /></div>   
            <div><button className = {'loginButton'} >Login</button></div>
        </form>
    )
}

   
const LoginReduxForm = reduxForm( { form : 'login' } ) (LoginForm)

export default Login;