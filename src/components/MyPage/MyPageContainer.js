import PostContainer from "../ProfilePage/post/postContainer";
import React from "react";
import MyPage from "./MyPage";
import {connect} from "react-redux";
import {thunkSetStatus,thunkUpdateStatus} from '../../redux/MyPageReducer'

const mapStateToProps=(state)=>{
    return{
        status:state.status
    }
}


const MyPageContainer=(props)=>{
    return <>
        <h1>Welcome to mai page</h1>
        <MyPage />
        <PostContainer />
    </>
}

export default MyPageContainer
