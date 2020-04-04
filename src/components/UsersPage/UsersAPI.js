import React, {Component} from 'react';
import * as axios from 'axios'
import Users from "./Users";
import Preloader from "../../common/preloader/Preloader";
import Api from "../../api/api";
import {ChangeButtonActive} from "../../redux/UsersPageReducer";

class MyFriends extends Component {


    componentDidMount() {

        Api.getUsers(this.props.currentPage, this.props.pageSize)

            .then((data) => {
                this.props.SetUsers(data.items);
                this.props.SetFetching(false);
                this.props.SetTotalUsersCount(data.totalCount)
            })
    }

    OnPageChanged(x) {
        this.props.SetCurrentPage(x);
        this.props.SetFetching(true);
        Api.getUsers(x, this.props.pageSize).then((data) => {

            this.props.SetUsers(data.items);
            this.props.SetFetching(false);
        })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.Follow}
                   unfollow={this.props.Unfollow}
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

export default MyFriends;


