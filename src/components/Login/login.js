import React from "react";
import { connect } from "react-redux";
import {ThunkLogin} from '../../redux/auth-reduser'
import { Redirect } from "react-router-dom";
import LoginReduxForm from "./LoginForm";


const Login=(props)=>{
    const onSubmit=(data)=>{
        props.ThunkLogin(data.email,data.password,data.rememberMe,data.captcha)
    }
    if(props.login){
        return <Redirect to={"/profile"}/>
    }
    return<>
        <h1>Login PAGE</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </>
}




const mapStateToProps=(state)=>{
    return {
        login:state.auth.login,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect(mapStateToProps,{ThunkLogin})(Login) 