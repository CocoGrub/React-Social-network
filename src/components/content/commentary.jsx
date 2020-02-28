import React from 'react'
import classes from './content.module.css'
import Comment from './comment/comment'
export default function Commentary(){
    return(<div className={classes.content}>
        Content here
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
    </div>)
}