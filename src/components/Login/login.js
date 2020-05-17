import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from '../../common/FormControls/formsControls'
import {required,MaxLengthCreator} from "../../utils/validators/validation";
import { connect } from "react-redux";
import {ThunkLogin} from '../../redux/auth-reduser'
import { Redirect } from "react-router-dom";
import styles from '../../common/FormControls/style.module.css'
const length40=MaxLengthCreator(40)

const LoginForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field validate={[required,length40]} placeholder={"Login"} name={"email"} component={Input}/>
            </div>
            <div>
                <Field  validate={[required,length40]}placeholder={"password"} type="password" name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"}  name={"rememberMe"} component={"input"}/>remember
            </div>{props.error &&  <div className={styles.formSummaryError}>{props.error}
                </div>}
            <button type={"submit"}>submit</button>
        </form>
    )
}

const LoginReduxForm=reduxForm({form:"login"})(LoginForm);

const mapStateToProps=(state)=>{
    return {
        login:state.auth.login
    }
}
const Login=(props)=>{
    const onSubmit=(data)=>{
        props.ThunkLogin(data.email,data.password,data.rememberMe)
    }
    if(props.login){
        return <Redirect to={"/profile"}/>
    }
    return<>
        <h1>Login PAGE</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

export default connect(mapStateToProps,{ThunkLogin})(Login) 