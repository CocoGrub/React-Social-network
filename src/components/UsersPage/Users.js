import React from "react";

import {NavLink} from "react-router-dom";
import Pagination from '../../common/pagination/pagination'
import DefaultPhoto from '../../../src/common/defPhoto/logo192.png'
import styles from './users.module.css'
const Users = (props) => {

    return (

        <div className={styles.CommonUserElement}>
            <div className={styles.CommonUserElement}>
            <Pagination {...props}/>
            </div>
            {props.users.map((x, y) => {

                return (<div className={styles.CommonUserElement} key={y}>
                    <img className={styles.CommonUserElement} src={ x.photos.large ||DefaultPhoto }/>
                    <br/>
                    <NavLink to={`./profile/` + x.id}>
                        <span>{x.name}</span>
                    </NavLink>
                    {x.followed ? <button disabled={props.followingInProgress.some((id) => {
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