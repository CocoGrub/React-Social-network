import React from 'react';
import Avatar from './avatar/avatar'
import classes from './comment.module.css'
export default function comment()  {
    return(
        <div className={classes.comment}>
            <textarea name="" id="" cols="30" rows="10"></textarea><Avatar></Avatar>
        </div>
    )
};
