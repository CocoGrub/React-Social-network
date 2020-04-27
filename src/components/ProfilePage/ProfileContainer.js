import React from "react";
import ProfilePage from "./ProfilePage";

import {ThunkSetProfile} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from '../withRouterHOC/withRouter'
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.ThunkSetProfile(this.props.match.params.id)
    }

    render() {


        return (
            <>
                <ProfilePage {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,

    }
}

export default compose
(connect(mapStateToProps, {ThunkSetProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);





