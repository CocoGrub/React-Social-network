import Api from "../api/api";

export const SetUsers = (users) => {
    return {type: 'SET_USERS', users}
};
export const SetCurrentPage = (page) => {
    return {type: 'SET_PAGE', page}
};
export const SetTotalUsersCount = (totalUsers) => {
    return {type: 'SET_PAGE_COUNT', totalUsers}
};
export const SetFetching = (x) => {
    return {type: 'IS_FETCHING', x}
};

export const FollowAC = (id) => {
    return {type: 'FOLLOW', id}
};

export const UnfollowAC = (id) => {
    return {type: 'UNFOLLOW', id}
};

export const ChangeButtonActive = (isFetching, id) => {
    return {type: "CHANGE_BUTTON_ACTIVE", isFetching, id}
};


export const ThunkSetCurrentPage = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(SetCurrentPage(currentPage));
        dispatch(SetFetching(true));
        Api.getUsers(currentPage, pageSize).then((data) => {

            dispatch(SetUsers(data.items));
            dispatch(SetFetching(false));
        })
    }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(SetFetching(true));

        Api.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(SetUsers(data.items));
                dispatch(SetFetching(false));
                dispatch(SetTotalUsersCount(data.totalCount))
            })
    }
};

const common= async(dispatch,id,apiMethod,followUnfollow)=>{
        dispatch(ChangeButtonActive(true,id));
        const res = await apiMethod(id)
        if (res.data.resultCode === 0) {
            dispatch(followUnfollow(id));
        }
        dispatch(ChangeButtonActive(false, id))
    }


export const Unfollow = (id) => {
    return async (dispatch)=>{common(dispatch,id,Api.Unfollow,UnfollowAC)}
    }

export const Follow = (id) => {
    return async(dispatch) => {
        dispatch(ChangeButtonActive(true,id));
            const res = await Api.Follow(id)
                if (res.data.resultCode === 0) {
                    dispatch(FollowAC(id));
                }
                dispatch(ChangeButtonActive(false, id))
    }
};



const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isFetching: true,
    followingInProgress: [],
    fake:1
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "hello":return{...state,fake:state.fake+1}
        case "CHANGE_BUTTON_ACTIVE":
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((id) => {
                        return id !== action.id
                    })
            };
        case 'SET_PAGE_COUNT':
            return {...state, totalUsersCount: action.totalUsers};
        case 'SET_USERS':
            return {...state, users: action.users};
        case 'SET_PAGE':
            return {...state, currentPage: action.page};
        case 'IS_FETCHING':
            return {...state, isFetching: action.x};
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    }
                    return el
                })
            };
        case 'FOLLOW':
            return {
                ...state, users: state.users.map((el) => {
                    if (el.id === action.id) {
                        return {...el, followed: true}
                    }
                    return el
                })
            };
        default:
            return state
    }


};


export default UsersPageReducer;