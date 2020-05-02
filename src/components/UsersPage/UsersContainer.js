import {connect} from 'react-redux'
import {SetUsers,SetCurrentPage,SetTotalUsersCount,ThunkSetCurrentPage,SetFetching,Follow,Unfollow,ChangeButtonActive,getUsersThunkCreator}
from '../../redux/UsersPageReducer';
import {GetUsers,CurrentPage,TotalUsersCount,PageSize,IsFetching,FollowingInProgress} from '../../redux/users-selectors';
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import React from "react";

class MyFriends extends React.Component {


    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }

    OnPageChanged(x) {
        this.props.ThunkSetCurrentPage(x,this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   Follow={this.props.Follow}
                   unFollow={this.props.Unfollow}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   reqPage={(x) => {
                       this.OnPageChanged(x)
                   }}
                   ChangeButtonActive={this.props.ChangeButtonActive}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


const mapStateToProps=(state)=>{
    return{
        users: GetUsers(state),
        currentPage:CurrentPage(state),
        totalUsersCount:TotalUsersCount(state),
        pageSize:PageSize(state),
        isFetching: IsFetching(state),
        followingInProgress:FollowingInProgress(state)
    }
};



const MyFriendsContainer=connect(mapStateToProps,{
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetFetching,
    Follow,
    Unfollow,
    ChangeButtonActive,
    getUsersThunkCreator,
    ThunkSetCurrentPage
})(MyFriends);

export default MyFriendsContainer