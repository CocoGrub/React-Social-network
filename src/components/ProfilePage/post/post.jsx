import React from 'react';
import {NavLink} from 'react-router-dom'
import classes from './post.module.css'

import {AddPostActionCreator,ChangeInputActionCreator} from '../../../redux/state'


export default function Contacts(props){


    const textRef = React.createRef();
    
    const changeTextArea = ()=>{
        const text =textRef.current.value
        props.store.dispatch(AddPostActionCreator(text));
    }

    const logger=function(){
        const text =textRef.current.value
        props.store.dispatch(ChangeInputActionCreator(text));
        
    }

    const data = props.store.getState()
    console.log(props);
    return (<div className={classes.post}>
        <div>
        <p>Add Post</p>
        
        <textarea  defaultValue={data.profilePage.defaultPostValue} ref={textRef} 
            onChange={logger
        }></textarea>

        <button onClick={()=>{changeTextArea()}}>post!</button>
        
        </div>
        
        {data.profilePage.posts.map((x,y)=>{
            return  (<div className={classes.postItem} key={y}><NavLink  to={`user${x.id}`}>{x.name}</NavLink>
            <textarea defaultValue={x.post}></textarea></div>)

        })}
    </div>)
}

