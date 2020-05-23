import React from "react";

import {NavLink} from "react-router-dom";
import Pagination from '../../common/pagination/pagination'
import DefaultPhoto from '../../../src/common/defPhoto/logo192.png'
import styles from './users.module.css'
const Users = (props) => {

    return (

        <div className={"jumbotron"} >
            <div style={{textAlign:"center"}} >
            <Pagination {...props}/>
            </div>
            <div className="row row-cols-1 row-cols-md-6 d-flex justify-content-center">


                {props.users.map((x, y) => {

                return (<div className="card  border-primary " style={{width:"15rem",margin:"0.5rem"}} key={y}>
                    <img className="card-img-top"  src={ x.photos.large ||DefaultPhoto }/>
                        <div className="card-body">

                    <NavLink to={`./profile/` + x.id}>
                        <h5 className="card-title">{x.name}</h5>
                    </NavLink>
                    {x.followed ? <button className="btn btn-danger"  disabled={props.followingInProgress.some((id) => {
                        return id === x.id
                    })}
                    onClick={() => {props.unFollow(x.id)}}>
                        unfollow</button> : <button className="btn btn-primary" disabled={props.followingInProgress.some((id) => {
                        return id === x.id
                    })} onClick={() => {props.Follow(x.id)}}>follow</button>}

                        </div>
                </div>)
            })}

            </div>
        </div>
    )
};

export default Users