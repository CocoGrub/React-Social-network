import React from 'react'
import classes from './header.module.css'
export default function Header(props){

    return(
        <div className={classes.header}>
        {!props.user.login?<h2>LOG IN </h2>:<div><h2>WELCOME COMMANDER {props.user.login}</h2><button onClick={props.ThunkLogOut}>log out</button></div>}
        </div>
    )
}