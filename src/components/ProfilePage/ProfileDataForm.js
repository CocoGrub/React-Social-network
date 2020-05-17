import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validation";
import {Input} from "../../common/FormControls/formsControls";

const ProfileDataForm = (props,error) => {
    console.log('error',error)
    return <>

        {props.error&&<div>{props.error}</div>}

        <form onSubmit={props.handleSubmit}>
            <div>About me</div>
            <Field placeholder={"fullname"} name={"fullname"} component={"input"}/>
            <div><b>Looking for a job :</b> {props.profile.lookingForAJob}</div>
            <Field type={"checkbox"} name={"lookingForAJob"} component={"input"}/>

            <div><b>about me :</b> {props.profile.aboutMe ? <span>info must be here</span> : <span>add bio</span>}</div>
            <div><b>looking for a job :</b> {props.profile.lookingForAJobDescription ? <span>OKAY THEN</span> :
                <span>add desc</span>}</div>
            <div>My prof skills {<Field name={"lookingForAJobDescription"}
                                        placeholder={"my skills is ...."} component={Input}/>}</div>
            <div>About me {<Field name={"aboutMe"}
                                  placeholder={"About me"} component={Input}/>}</div>
            {Object.keys(props.profile.contacts).map((key) => {
                return <div key={key}><b>{key}:</b><Field placeholder={key} component={"input"}  name={`contacts.${key}`}
                                             /></div>
            })}
            <button type={"submit"}>send</button>
        </form>
    </>
}
const ProfileReduxDataForm = reduxForm({form: "ProfileDataForm"})(ProfileDataForm);
export default ProfileReduxDataForm