import Api from "../api/api";
import {stopSubmit} from "redux-form";

const addPost = "ADD-POST";
const changeInput = "CHANGE-INPUT";
const savePhoto = "SAVE-PHOTO";
const setStatus = (status) => {
    return {type: "setStatus", status}
}

export const AddPostActionCreator = (text) => {
    return {type: addPost, post: text}
};


export const ChangeInputActionCreator = (text) => { // used in ui
    return {type: changeInput, defaultPostValue: text}
};

export const savePhotoSucces = (photos) => {
    return {type: savePhoto, photos: photos}
}
export const SetProfile = (profile) => {
    return {type: "setProfile", profile: profile}
};

export const ThunkSetProfile = (userID) => {
    return async (dispatch) => {
        const response = await Api.GetProfile(userID)

        dispatch(SetProfile(response.data))
//dodelat'


    }
}
// bug при обновлении фото профиля

export const ThunkUploadPhoto = (x) => {
    return async (dispatch) => {
        const response = await Api.SavePhoto(x)
        if (response.data.resultCode === 0)
            debugger
        dispatch(savePhotoSucces(response.data.data.photos))
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
    profile: {
        photos: {
            large: "",
            small: ""
        },
        contacts: {}

    },
    status: "none status here",
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
        case savePhoto:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const ThunkSendBio = (data) => {
    return async (dispatch, getState) => {
        const profile = getState().auth.id
        const response = await Api.sendBio(data)
        if (response.data.resultCode === 0) {
            dispatch(ThunkSetProfile(profile)) //??
        } else {
            dispatch(stopSubmit("ProfileDataForm", {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
}

export default ProfilePageReducer;