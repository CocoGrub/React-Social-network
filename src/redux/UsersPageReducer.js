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

export const Follow = (id) => {
    return {type: 'FOLLOW', id}
};

export const Unfollow = (id) => {
    return {type: 'UNFOLLOW', id}
};

export const ChangeButtonActive = (isFetching,id) => {
    return {type: "CHANGE_BUTTON_ACTIVE", isFetching, id}
};

const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    pageSize: 10,
    isFetching: true,
    followingInProgress: []
};

const UsersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_BUTTON_ACTIVE":
            return {...state, followingInProgress: action.isFetching?
                    [...state.followingInProgress,action.id]
                    : state.followingInProgress.filter((id)=>{return id!=action.id})};
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