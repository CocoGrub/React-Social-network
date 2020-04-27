import React from 'react'
import PostContainer from './post/postContainer'
import classes from './profilePage.module.css'

 const  ProfilePage =(props)=>{


    return(

        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
        <p>About me</p>
            <span>{props.profile.fullName}</span>
        <div>comments</div>
        <PostContainer ></PostContainer>
        </div>
        
    )
}

export default ProfilePage