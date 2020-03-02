import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'




export default function Contacts(props){

    console.log(props);
    const textRef = React.createRef();
    
    const changeTextArea = ()=>{
        const text =textRef.current.value
        props.data.change(text)
    }

    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        <textarea  defaultValue={props.data.defautltValue} ref={textRef} onChange={changeTextArea}></textarea>
        <button onClick={()=>{
            props.data.addPost(textRef.current.value); 
         }}>post!</button>
        
        </div>
        
        {props.data.profile.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <textarea defaultValue={x.post}></textarea></div>)

        })}
    </div>)
}