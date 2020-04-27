import React from "react";
import styles from "./style.module.css";
import {NavLink} from "react-router-dom";



const Users = (props) => {

    const pagesCount = 10; // Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    console.log('users', props)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div>
            {pages.map((x, k) => {
                return (
                    <span key={k} className={props.currentPage === x ? styles.activePage : ''}
                          onClick={() => {
                              props.reqPage(x)
                          }}>{x}</span>
                )
            })}


            {props.users.map((x, y) => {

                return (<div key={y}>
                    <NavLink to={`./profile/` + x.id}>
                        <span>{x.name}</span>
                    </NavLink>
                    {x.followed ? <button disable={props.followingInProgress.some((id) => {
                        return id === x.id
                    })}
                                          onClick={() => {props.unFollow(x.id)}}>
                        unfollow</button> : <button disabled={props.followingInProgress.some((id) => {
                        return id === x.id
                    })} onClick={() => {props.Follow(x.id)}}>follow</button>}


                </div>)
            })}
        </div>
    )
};

export default Users