import Api from "../api/api";
import { stopSubmit } from "redux-form";



export const notAuth = () => {
    return {
        type: "notAuth",
    }

};


const defaultState = {
    id: null,
    email: null,
    login: null,
    isAuth: null
};



const authReduser = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data,isAuth: true};
        case "notAuth":
            return {...state, id: null, password: null, isAuth: null};
        default: return state
    }
}



export default authReduser;

export const setUserData = (id, email, login) => {return {type: "SET_USER_DATA", data: {
            id: id,
            email: email,
            login: login
        }
    }

};


export const ThunkSetUserData=()=> {
    return (dispatch) =>{
        Api.Me().then((response)=>{
            if(response.data.resultCode===0){
                const {id,login,email}=response.data.data;
                return dispatch(setUserData(id,email,login,true))
            }
        })
    }
}

export const ThunkLogin=(email,password,rememberMe)=>{
    return (dispatch)=>{
        Api.Login(email,password,rememberMe).then((res)=>{
            if(res.data.resultCode===0){
                dispatch(ThunkSetUserData())
            }else{
                const message = res.data.messages.length>0?res.data.messages[0]:"something went wrong.."
                let action = stopSubmit("login",{_error:message})
                dispatch(action)
            }

        })
    }
};

export const ThunkLogOut=()=>{
    return (dispatch)=>{
        Api.LogOut().then((response)=>{
            if(response.data.resultCode===0){
                dispatch(setUserData(null,null,null,null))
            }
        })
    }
}