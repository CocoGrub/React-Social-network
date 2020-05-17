import React, {useEffect, useRef} from "react";
import ProfilePage from "./ProfilePage";

import {ThunkSetProfile,thunkSetStatus,thunkUpdateStatus,ThunkUploadPhoto,ThunkSendBio} from '../../redux/ProfileReducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from "react-router-dom";
import withAuthRedirect from '../Hoc/withRouter'
import {compose} from "redux";

class ProfileContainer extends React.Component{


    componentDidMount(){
        console.log(this.props)
        this.refresh()
}

componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.id!=prevProps.match.params.id){
            this.refresh()
        }
}

refresh(){
    if(!this.props.match.params.id){
        if(!this.props.isAuth){
            this.props.history.push('/login') //перерделать это и что ниже
        }
    }
    this.props.thunkSetStatus( this.props.match.params.id);
    this.props.ThunkSetProfile( this.props.match.params.id)
}





    render(){
        if(Object.keys(this.props.profile.contacts).length<=0){
            return <div>Loading...</div>
        }
    return (
        <>
            <ProfilePage
                profile={this.props.profile}
                status={this.props.status}
                isAuth={this.props.isAuth}
                isOwner={+this.props.match.params.id}
                authorizedUserId={this.props.authorizedUserId}
                ThunkUploadPhoto={this.props.ThunkUploadPhoto}
                thunkSetStatus={this.props.thunkSetStatus}
                thunkUpdateStatus={this.props.thunkUpdateStatus}
                ThunkSendBio={this.props.ThunkSendBio}
            />
        </>
    )
}


}

const mapStateToProps = (state) => {
    return {
        authorizedUserId: state.auth.id,
        isAuth:state.auth.isAuth,
        profile: state.profilePage.profile,
        status:state.profilePage.status



    }
}
const ProfileRoute= withRouter(ProfileContainer)
// compose(
export default connect(mapStateToProps, {ThunkSetProfile,thunkSetStatus,thunkUpdateStatus,ThunkUploadPhoto,ThunkSendBio})(ProfileRoute)

    // withAuthRedirect






