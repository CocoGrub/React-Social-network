

const addPost="ADD-POST"
const changeInput ="CHANGE-INPUT"


export const AddPostActionCreator=(text)=>{ 
    return{type:addPost,post:text}
}


export const ChangeInputActionCreator=(text)=>{ // used in ui
    return{type:changeInput,defaultPostValue:text}
}


export const SetProfile=(profile)=>{
    return{type:"setProfile",profile:profile}
}

const initialState = {
    posts: [
        {name: 'vanya', id: 1, likes: 2, post: 'i love u'},
        {name: 'john', id: 2, likes: 2, post: 'mazda'},
        {name: 'gena', id: 3, likes: 2, post: 'bmw'},
        {name: 'GHalya', id: 4, likes: 2, post: 'sprooot'}],
    profile:null,

    defaultPostValue: 'post here'
};


const ProfilePageReducer = (state=initialState,action)=>{
    switch(action.type){
        case "setProfile": return {...state,profile: action.profile}
        case addPost:
            const myState ={...state};
            myState.posts=[...state.posts]
            myState.posts.push({
                name:'Volodya',
                id:6,
                likes:0,
                post:action.post})
        return myState
        case changeInput:
            const myState1 = {...state}
            myState1.defaultPostValue=action.defaultPostValue 
        return myState1   
        default:return state}
    }

export default ProfilePageReducer;