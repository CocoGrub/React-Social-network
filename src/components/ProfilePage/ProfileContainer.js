import React from "react";
import ProfilePage from "./ProfilePage";
import Axios from "axios";
import {SetProfile} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        Axios.get(`    https://social-network.samuraijs.com/api/1.0/profile/ +${this.props.match.params.id}`).then(
            (res) => {
                this.props.SetProfile(res.data)


            })
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
        profile: state.profilePage.profile
    }
}
const routerProfileContainer=withRouter(ProfileContainer)


export default connect(mapStateToProps, {
    SetProfile

})(routerProfileContainer);