import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navigate.module.css'

export default function navigate(props) {

    return (<div className='navigation'>
        <p><NavLink activeClassName={classes.active} to='/login'>Log in</NavLink></p>

        {props.authorizedID !=null ?
            <p><NavLink activeClassName={classes.active} to={`/profile/${props.authorizedID}`}>my page</NavLink>
            </p> : null}
        <p><NavLink activeClassName={classes.active} to='/myFriends'>my friends</NavLink></p>
        <p>my photos</p>
        <p><NavLink activeClassName={classes.active} to='/settings'>my settings</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/dialog'>Общение</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/profile'>profile</NavLink></p>
    </div>)
}