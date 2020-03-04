import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'

import {AddPostActionCreator,ChangeInputActionCreator} from '../../../redux/ProfileReducer'


export default function Contacts(props){

    const textRef = React.createRef()
    
    const addPost = ()=>{
        const text =textRef.current.value
        props.store.dispatch(AddPostActionCreator(text));
    }

    const logger=function(e){
        const text = e.target.value
         props.store.dispatch(ChangeInputActionCreator(text));
        
    }

    const data = props.store.getState()
    console.log(props);
    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        
        <textarea  defaultValue={data.profilePage.defaultPostValue} ref={textRef}
            onChange={(e)=>logger(e)}></textarea>

        <button onClick={(e)=>{addPost(e)}}>post!</button>
        
        </div>
        
        {data.profilePage.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <textarea defaultValue={x.post}></textarea></div>)

        })}
    </div>)
}

