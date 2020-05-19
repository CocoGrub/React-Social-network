import React from "react";
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../utils/validators/validation";
import {Input} from "../../common/FormControls/formsControls";
import styles from "../../common/FormControls/style.module.css";

const length40 = MaxLengthCreator(40)
const length10 = MaxLengthCreator(10)
const LoginForm = (props) => {
    return (
        <>
            {props.captchaUrl && <img src={props.captchaUrl}></img>}
            <form onSubmit={props.handleSubmit}>

                {props.captchaUrl &&
                <Field validate={[required, length10]} placeholder={"enter the captcha here"} name={"captcha"} component={Input}></Field>}
                <div>
                    <Field validate={[required, length40]} placeholder={"Login"} name={"email"} component={Input}/>
                </div>
                <div>
                    <Field validate={[required, length40]} placeholder={"password"} type="password" name={"password"}
                           component={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember
                </div>
                {props.error && <div className={styles.formSummaryError}>{props.error}
                </div>}
                <button type={"submit"}>submit</button>
            </form>
        </>
    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default LoginReduxForm;