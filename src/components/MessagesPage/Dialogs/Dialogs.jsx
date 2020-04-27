import React from 'react';
import {Navlink} from 'react-router-dom'
import classes from './Dialogs.module.css'
import {Field, reduxForm} from "redux-form";

const DialogsForm = (props) => {
    return (
        <form name="dialog" onSubmit={props.handleSubmit}>
            <Field onSubmit={props.handleSubmit} component="input" name="sendMessage"></Field>
            <button> send!</button>
        </form>
    )
}

const ReduxFormDialog = reduxForm({form: "Dialog"})(DialogsForm);

const Dialogs = (props) => {
      const sendSMS = (body) => {

       props.sendMessage(body.sendMessage)
    }

    const names = props.names.map((x, k) => {
        return (<div className={classes.el} key={k}>{x.name}</div>)
    })

    const messages = props.messages.map((x, k) => {
        return (<div className={classes.el} key={k}>
        </div>)
    })

    return (<div className={classes.talk}>
        <ReduxFormDialog onSubmit={sendSMS}/>
        <div>{names}</div>
        <div>{messages}</div>

    </div>)
}

export default Dialogs