import { combineReducers, createStore } from "redux";
import messagePageReducer from './MessagePageReducer'
import ProfilePageReucer from './ProfileReducer'
const redusers=combineReducers({

messagesPage: messagePageReducer,
profilePage: ProfilePageReucer
})

const store = createStore(redusers);

export default store