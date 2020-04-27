import React from 'react'
import PostContainer from './post/postContainer'
import classes from './profilePage.module.css'
import Status from "./Status/Status";
 const  ProfilePage =(props)=>{

    return(

        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
            <br/>
            <Status {...props}/>

        <p>About me</p>
            <span>{props.profile.fullName}</span>


        <div>comments</div>
            <PostContainer/>
        </div>
        
    )
}

export default ProfilePage