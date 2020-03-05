import React from 'react'
import PostContainer from './post/postContainer'
import classes from './profilePage.module.css'
 const  ProfilePage =(props)=>{
console.log(props);

// return<p></p>
    return(
        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
        <p>About me</p>
        <div>comments</div>
        <PostContainer store={props.store} ></PostContainer>
        </div>
        
    )
}

export default ProfilePage