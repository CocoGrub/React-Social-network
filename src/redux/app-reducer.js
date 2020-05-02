
import {ThunkSetUserData} from './auth-reduser'

const defaultState = {
    initialized: false,   
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "INITIALIZE":
            return {...state, initialized:true};
        default: return state
    }
}


export const setInitialized = () => {
    return {
        type: "INITIALIZE"}
    };


export const ThunkSetInitialized=()=> {
    return (dispatch)=>{
        const UserDataPromise=dispatch(ThunkSetUserData())
        // UserDataPromise.then(()=>{
        //     return dispatch(setInitialized())
        // })
    return Promise.all([UserDataPromise]).then(()=>{
        dispatch(setInitialized())
    })
    }
}

export default appReducer;