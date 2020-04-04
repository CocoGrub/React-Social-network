import {connect} from 'react-redux'
import {SetUsers,SetCurrentPage,SetTotalUsersCount,SetFetching,Follow,Unfollow,ChangeButtonActive} from '../../redux/UsersPageReducer';
import Users from './UsersAPI'


const mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
};

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         goFriend:(id)=>{dispatch(goFriendAC(id))},
//         unFriendAC:(id)=>{dispatch(unFriendAC(id))},
//         setUsers:(users)=>{dispatch(setUsersAC(users))},
//         setCurrentPage:(page)=>{dispatch(setCurrentPageAC(page))},
//         setTotalUsersCount:(totalUsers)=>{dispatch(setTotalUsersCountAC(totalUsers))},
//         isFetching:(x)=>{dispatch(isFetchingAC(x))}
//     }
// }

const MyFriendsContainer=connect(mapStateToProps,{
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetFetching,
    Follow,
    Unfollow,
    ChangeButtonActive
})(Users);

export default MyFriendsContainer