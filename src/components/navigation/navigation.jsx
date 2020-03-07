import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navigate.module.css'
export default function navigate(){
    return(<div className='navigation'>
        <p>my page</p>
        <p>my friend</p>
        <p>my photos</p>
        <p><NavLink activeClassName={classes.active} to='/settings'>my settings</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/dialog'>Общение</NavLink></p>
        <p><NavLink activeClassName={classes.active} to='/profile'>profile</NavLink></p>
    </div>)
}