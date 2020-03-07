import { combineReducers, createStore } from "redux";
import messagePageReducer from './MessagePageReducer'
import ProfilePageReducer from './ProfileReducer'
import globalsReducer from './globalsReducer'

const redusers=combineReducers({

    messagesPage: messagePageReducer,
    profilePage: ProfilePageReducer,
    globals : globalsReducer
})

const store = createStore(redusers);

export default store