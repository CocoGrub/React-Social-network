import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from '../../common/FormControls/formsControls'
import {required,MaxLengthCreator} from "../../utils/validators/validation";
import { connect } from "react-redux";
import {ThunkLogin} from '../../redux/auth-reduser'
import { Redirect } from "react-router-dom";
import styles from '../../common/FormControls/style.module.css'
import LoginReduxForm from "./LoginForm";


const Login=(props)=>{
    const onSubmit=(data)=>{
        props.ThunkLogin(data.email,data.password,data.rememberMe)
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