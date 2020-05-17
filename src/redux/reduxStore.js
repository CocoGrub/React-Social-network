import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagePageReducer from './MessagePageReducer'
import ProfilePageReducer from './ProfileReducer'
import globalsReducer from './globalsReducer'
import UsersPageReducer from './UsersPageReducer'
import authReducer from './auth-reduser'
import MyPageReducer from './MyPageReducer'
import appReducer from './app-reducer'
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
const reducers=combineReducers({

    messagesPage: messagePageReducer,
    profilePage: ProfilePageReducer,
    globals : globalsReducer,
    usersPage:UsersPageReducer,
    auth:authReducer,
    MyPage:MyPageReducer,
    form: formReducer,
    app:appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store=store
export default store