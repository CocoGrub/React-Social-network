import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './navigate.module.css'

export default function navigate(props) {

    return (<div className="navbar navbar-dark bg-dark">

        <NavLink className="nav-link" activeClassName={classes.active} to='/'>Main</NavLink>

        {props.authorizedID ?
            <NavLink className="nav-link" activeClassName={classes.active} to={'/profile/'+props.authorizedID}>My page</NavLink>
            : null}
        <NavLink className="nav-link" activeClassName={classes.active} to='/myFriends'>Users</NavLink>
        <NavLink className="nav-link" activeClassName={classes.active} to='/about'>About</NavLink>
        <NavLink  className="nav-link" activeClassName={classes.active} to='/settings'>My settings</NavLink>
        <NavLink  className="nav-link" activeClassName={classes.active} to='/about'>Dialogs</NavLink>
        {/*<p><NavLink activeClassName={classes.active} to='/profile'>profile</NavLink></p>*/}


        {!props.authorizedID ? <button className="nav-link">LOG IN </button> : <>
            <span className={"text-success"}>WELCOME COMMANDER {props.authorizedID}</span>
            <button type="button" className="btn btn-danger" onClick={props.ThunkLogOut}>log out</button>
        </>}


    </div>)
}
