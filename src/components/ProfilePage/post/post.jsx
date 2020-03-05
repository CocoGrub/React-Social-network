import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'



export default function Post(props){

    const textRef = React.createRef()
    
    const addPost = ()=>{
        const text =textRef.current.value
        props.pushPost(text)
    }

    const logger=function(e){
        const text = e.target.value
        props.changeInput(text)
        
    }


    console.log(props);
    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        
        <textarea  defaultValue={props.defaultPostValue} ref={textRef}
            onChange={(e)=>logger(e)}></textarea>

        <button onClick={(e)=>{addPost(e)}}>post!</button>
        
        </div>
        
        {props.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <textarea defaultValue={x.post}></textarea></div>)

        })}
    </div>)
}

