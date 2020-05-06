import React from "react";

import {NavLink} from "react-router-dom";
import Pagination from '../../common/pagination/pagination'


const Users = (props) => {

    return (

        <div>
            <Pagination {...props}/>
            {props.users.map((x, y) => {

                return (<div key={y}>
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