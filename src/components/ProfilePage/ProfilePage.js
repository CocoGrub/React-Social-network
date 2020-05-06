import React from 'react'
import PostContainer from './post/postContainer'
import classes from './profilePage.module.css'
import StatusHook from "./Status/StatusHook";
 const  ProfilePage =(props)=>{

    return(

        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
            <br/>
            <StatusHook {...props}/>

        <p>About me</p>
            <span>{props.profile.fullName}</span>


        <div>comments</div>
            <PostContainer/>
        </div>
        
    )
}

export default ProfilePage