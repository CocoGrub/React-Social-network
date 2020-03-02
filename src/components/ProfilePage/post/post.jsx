import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'




export default function Contacts(props){

    console.log(props);
    const textRef = React.createRef();
    
// return(<p>d</p>)

    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        <textarea ref={textRef}></textarea>
        <button onClick={()=>{
            props.data.method(textRef.current.value); console.log(props.data);
         }}>post!</button>
        
        </div>
        
        {props.data.profile.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <textarea defaultValue={x.post}></textarea></div>)

        })}
    </div>)
}