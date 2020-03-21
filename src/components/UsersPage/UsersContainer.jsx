import {connect} from 'react-redux'
import {goFriendAC,unFriendAC,setUsers} from '../../redux/UsersPageReducer';
import Users from './Users'




const mapStateToProps=(state)=>{
    return{
        users: state.usersPage.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        goFriend:(id)=>{dispatch(goFriendAC(id))},
        unFriendAC:(id)=>{dispatch(unFriendAC(id))},
        setUsers:(users)=>{dispatch(setUsers(users))}
    }
}

const MyFriendsContainer=connect(mapStateToProps,mapDispatchToProps)(Users)

export default MyFriendsContainer