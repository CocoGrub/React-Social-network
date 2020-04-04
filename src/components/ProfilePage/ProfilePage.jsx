import React from 'react'
import PostContainer from './post/postContainer'
import classes from './profilePage.module.css'
 const  ProfilePage =(props)=>{
     if(!props.profile){
         return (<h1>fck u</h1>)
     }

    return(

        <div className={classes.dialog}>
        <img alt='myPhoto'></img>
        <p>About me</p>
            <span>{props.profile.profile.name}</span>
        <div>comments</div>
        <PostContainer ></PostContainer>
        </div>
        
    )
}

export default ProfilePage