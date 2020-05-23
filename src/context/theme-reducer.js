const SET_WHITE="SET_WHITE";
const SET_DARK="SET_DARK";
const SET_YELLOW="SET_YELLOW";
const SET_CUSTOM ="SET_CUSTOM"

export const initialState={
    color:"#fff3e6"
}

const colorReducer=(state=initialState,action)=>{
    switch (action.type) {
        case SET_WHITE:return {...state,color:"white"}
        case SET_DARK:return {color: "black"}
        case SET_YELLOW:return {...state,color:"yellow"}
        case SET_CUSTOM:return {...state,color:action.payload}
        default : return state
    }
}
export default colorReducer;

export const setWhiteAC=(payload)=>{
    return{
        type:SET_WHITE,
    }
}

export const setDarkAC=()=>{

    return{
        type:SET_DARK,
    }
}

export const setYellowAC=(payload)=>{
    return{
        type:SET_YELLOW,
    }
}
export const setCustomAC=(payload)=>{
    return{
        type:SET_CUSTOM,
        color:payload
    }
}