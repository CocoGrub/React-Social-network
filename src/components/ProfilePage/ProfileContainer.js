import React from "react";
import ProfilePage from "./ProfilePage";

import {ThunkSetProfile,thunkSetStatus,thunkUpdateStatus} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from '../withRouterHOC/withRouter'
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.thunkSetStatus(this.props.match.params.id)
        this.props.ThunkSetProfile(this.props.match.params.id)
    }

    render() {
        return (
            <>
                <ProfilePage  {...this.props}/>
            </>
        )
    }
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






