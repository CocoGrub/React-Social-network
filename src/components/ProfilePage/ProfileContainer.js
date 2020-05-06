import React, { useEffect } from "react";
import ProfilePage from "./ProfilePage";

import {ThunkSetProfile,thunkSetStatus,thunkUpdateStatus} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from '../withRouterHOC/withRouter'
import {compose} from "redux";

const ProfileContainer = (props) =>{
    
    useEffect(()=>{
        props.thunkSetStatus(this.props.match.params.id)
        props.ThunkSetProfile(this.props.match.params.id)
    },[])

    return (
            <>
                <ProfilePage  {...this.props}/>
            </>
        )

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth,
        status:state.profilePage.status


    }
}
const ProfileRoute= withRouter(ProfileContainer)
// compose(
export default    connect(mapStateToProps, {ThunkSetProfile,thunkSetStatus,thunkUpdateStatus})(ProfileRoute)

    // withAuthRedirect






