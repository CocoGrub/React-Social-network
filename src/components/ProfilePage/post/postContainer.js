import React from 'react'
import Post from './post'
import {AddPostActionCreator,ChangeInputActionCreator} from '../../../redux/ProfileReducer'


const postContainer = (props)=>{

    const defaultPostValue = props.store.getState().profilePage.defaultPostValue;
    const posts=props.store.getState().profilePage.posts;
    const pushPost=(text)=>{
        props.store.dispatch(AddPostActionCreator(text));
    }
    const changeInput=(text)=>{
        props.store.dispatch(ChangeInputActionCreator(text));
    
    }
    return(<div>

        
        <Post 
        defaultPostValue={defaultPostValue}
        pushPost={(text)=>{pushPost(text)}}
        changeInput={(text)=>{changeInput(text)}}
        posts={posts}
        />
        
        
        </div>)
}

export default postContainer