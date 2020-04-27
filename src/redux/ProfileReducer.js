import Api from "../api/api";

const addPost = "ADD-POST";
const changeInput = "CHANGE-INPUT";

const setStatus = (status) => {
    return {type: "setStatus", status}
}

export const AddPostActionCreator = (text) => {
    return {type: addPost, post: text}
};


export const ChangeInputActionCreator = (text) => { // used in ui
    return {type: changeInput, defaultPostValue: text}
};


export const SetProfile = (profile) => {
    return {type: "setProfile", profile: profile}
};

export const ThunkSetProfile = (userID) => {
    return (dispatch) => {

        Api.GetProfile(userID).then((res) => {
            dispatch(SetProfile(res.data))

        }).catch(err => console.log(err))

    }
}


export const thunkSetStatus = (id) => {
    return (dispatch) => {
        Api.GetStatus(id).then((res) => {

            dispatch(setStatus(res.data))
        })
    }
}

export const thunkUpdateStatus = (status) => {
    return (dispatch) => {
        Api.UpdateStatus(status).then((res) => {

            if (res.data.resultCode === 0) dispatch(setStatus(status))
        })
    }
}


const initialState = {
    posts: [
        {name: 'vanya', id: 1, likes: 2, post: 'i love u'},
        {name: 'john', id: 2, likes: 2, post: 'mazda'},
        {name: 'gena', id: 3, likes: 2, post: 'bmw'},
        {name: 'gayla', id: 4, likes: 2, post: 'scrooge'}],
    profile: "default",
    status:"none status here",
    defaultPostValue: 'post here'
};


const ProfilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setStatus":
            return {...state, status: action.status};
        case "setProfile":
            return {...state, profile: action.profile}
        case addPost:
            const myState = {...state};
            myState.posts = [...state.posts]
            myState.posts.push({
                name: 'Valeda',
                id: 6,
                likes: 0,
                post: action.post
            })
            return myState
        case changeInput:
            const myState1 = {...state}
            myState1.defaultPostValue = action.defaultPostValue
            return myState1
        default:
            return state
    }
}

export default ProfilePageReducer;