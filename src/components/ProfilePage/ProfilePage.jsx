import React from 'react'
import Post from './post/post'
import classes from './profilePage.module.css'
 const  ProfilePage =(props)=>{
console.log(props);

// return<p></p>
    return(
        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
        <p>About me</p>
        <div>comments</div>
        <Post data={props} ></Post>
        </div>
        
    )
}

export default ProfilePage