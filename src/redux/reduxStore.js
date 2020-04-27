import {applyMiddleware, combineReducers, createStore} from "redux";
import messagePageReducer from './MessagePageReducer'
import ProfilePageReducer from './ProfileReducer'
import globalsReducer from './globalsReducer'
import UsersPageReducer from './UsersPageReducer'
import authReducer from './auth-reduser'
import MyPageReducer from './MyPageReducer'
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
const reducers=combineReducers({

    messagesPage: messagePageReducer,
    profilePage: ProfilePageReducer,
    globals : globalsReducer,
    usersPage:UsersPageReducer,
    auth:authReducer,
    MyPage:MyPageReducer,
    form: formReducer
})



const store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store
export default store