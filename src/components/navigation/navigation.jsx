import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navigate.module.css'
export default function navigate(){
    return(<div className='navigation'>
        <p><NavLink activeClassName={classes.active} to='/login'>Log in</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/profile/6834'>my page</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/myFriends'>my friends</NavLink></p>
        <p>my photos</p>
        <p><NavLink activeClassName={classes.active} to='/settings'>my settings</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/dialog'>Общение</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/profile'>profile</NavLink></p>
    </div>)
}