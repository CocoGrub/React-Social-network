import { combineReducers, createStore } from "redux";
import messagePageReducer from './MessagePageReducer'
import ProfilePageReducer from './ProfileReducer'
import globalsReducer from './globalsReducer'
import UsersPageReducer from './UsersPageReducer'
import authReduser from './auth-reduser'
const redusers=combineReducers({

    messagesPage: messagePageReducer,
    profilePage: ProfilePageReducer,
    globals : globalsReducer,
    usersPage:UsersPageReducer,
    auth:authReduser
})

const store = createStore(redusers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store=store
export default store