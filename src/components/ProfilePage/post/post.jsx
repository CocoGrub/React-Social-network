import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'
import {Field, reduxForm} from "redux-form";
import {required,MaxLengthCreator} from "../../../utils/validators/validation";
import {Textarea} from "../../../common/FormControls/formsControls";

const maxLength10=MaxLengthCreator(10)

const PostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit} name={"post"}>
            <Field component={Textarea} validate={[required,maxLength10]} name="newMessageBody"
                   placeholder="enter the ninja"></Field>
            <button>post!</button>
        </form>
    )
};
const ReduxPostForm=reduxForm({form:"PostForm"})(PostForm);



export default function Post(props){
    const addMessage=(e)=>{

        props.pushPost(e.newMessageBody)
    }

    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        <ReduxPostForm onSubmit={addMessage} />
        </div>
        
        {props.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <span >{x.post}</span></div>)

        })}
    </div>)
}

