export const GetUsers=(state)=>{
    return state.usersPage.users
}
export const CurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const TotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount
}
export const PageSize=(state)=>{
    return state.usersPage.pageSize
}
export const IsFetching=(state)=>{
    return state.usersPage.isFetching
}
export const FollowingInProgress=(state)=>{
    return state.usersPage.followingInProgress
}

