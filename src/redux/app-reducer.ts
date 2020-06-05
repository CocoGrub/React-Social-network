import {ThunkSetUserData} from './auth-reduser'

const INITIALIZE = '/app-reducer/INITIALIZE'

export type InitialStateType = {
    initialized: boolean
}


const defaultState: InitialStateType = {
    initialized: false,
};


const appReducer = (state = defaultState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIALIZE:
            return {...state, initialized: true};
        default:
            return state
    }
}

type setInitialized = {
    type: typeof INITIALIZE
}

export const setInitialized = (): setInitialized => {
    return {
        type: INITIALIZE,

    }
};


export const ThunkSetInitialized = () => {
    return (dispatch: any) => {
        const UserDataPromise = dispatch(ThunkSetUserData())
        // UserDataPromise.then(()=>{
        //     return dispatch(setInitialized())
        // })
        return Promise.all([UserDataPromise]).then(() => {
            dispatch(setInitialized())
        })
    }
}

export default appReducer;