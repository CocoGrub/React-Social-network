import {connect} from 'react-redux'
import {SetUsers,SetCurrentPage,SetTotalUsersCount,SetFetching,Follow,Unfollow} from '../../redux/UsersPageReducer';
import Users from './UsersAPI'




const mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users,
        currentPage:state.usersPage.currentPage,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize:state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         goFriend:(id)=>{dispatch(goFriendAC(id))},
//         unFriendAC:(id)=>{dispatch(unFriendAC(id))},
//         setUsers:(users)=>{dispatch(setUsersAC(users))},
//         setCurrentPage:(page)=>{dispatch(setCurrentPageAC(page))},
//         setTotalUsersCount:(totalUsers)=>{dispatch(setTotalUsersCountAC(totalUsers))},
//         isFetching:(x)=>{dispatch(isFetchingAC(x))}
//
//     }
// }

const MyFriendsContainer=connect(mapStateToProps,{
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetFetching,
    Follow,
    Unfollow})(Users)

export default MyFriendsContainer