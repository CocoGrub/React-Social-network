import Api from "../api/api";
import { stopSubmit } from "redux-form";


const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"
const SET_USER_DATA = "auth/SET_USER_DATA"
const NOT_AUTH='auth/NOT_AUTH'

type  NotAuthType={
    type: typeof NOT_AUTH
}
export const notAuth = ():NotAuthType => {
    return {
        type: NOT_AUTH,
    }

};

type DefaultStateType = {
    id: null | string
    email: null | string
    login: null | string
    isAuth: null | boolean
    captchaUrl: null | string
}

const defaultState: DefaultStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: null,
    captchaUrl: null
};


const authReducer = (state = defaultState, action: any): DefaultStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true};
        case NOT_AUTH:
            return {...state, id: null, isAuth: null};
        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captchaUrl: action.payload}
        default:
            return state
    }
}


export default authReducer;
type SetCaptchaUrlType={
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload:string
}
export const setCaptchaUrl = (captchaUrl: string):SetCaptchaUrlType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: captchaUrl}
}

type SetUserDataPayloadType = {
    id: string|null
    email: string|null
    login: string|null
    isAuth: boolean|null
}
type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: SetUserDataPayloadType
}


export const setUserData = (id: string|null, email: string|null, login: string|null, isAuth: boolean|null): SetUserDataType => {
    return {
        type: SET_USER_DATA, data: {
            id: id,
            email: email,
            login: login,
            isAuth: isAuth
        }
    }

};


export const ThunkSetUserData = () => {
    return (dispatch: any) => {
        Api.Me().then((response: any) => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data;
                return dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const ThunkLogin = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return (dispatch: any) => {
        Api.Login(email, password, rememberMe, captcha).then((res:any) => {
            if (res.data.resultCode === 0) {
                dispatch(ThunkSetUserData())
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : "something went wrong.."
                let action = stopSubmit("login", {_error: message})
                dispatch(action)
                if (res.data.resultCode === 10) {
                    dispatch(ThunkRequestCaptcha())

                }
            }

        })
    }
};


export const ThunkRequestCaptcha = () => {
    return async (dispatch:any) => {
        const response = await Api.requestCaptcha();
        const imageUrl = response.data.url;
        dispatch(setCaptchaUrl(imageUrl))
    }

};


export const ThunkLogOut = () => {
    return (dispatch:any) => {
        Api.LogOut().then((response:any) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, null))
            }
        })
    }
}