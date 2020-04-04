export const setUserData = (id, email, login) => {
    return {
        type: "SET_USER_DATA",
        data: {
            id: id,
            email: email,
            login: login
        }
    }

};

export const notAuth = () => {
    return {
        type: "notAuth",
    }

};


const defaultState = {
    id: null,
    email: null,
    login: null
};


const authReduser = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {...state, ...action.data};
        case "notAut":
            return {...state, id: null, password: null, isAuth: null};
        default: return state
    }
}

export default authReduser;