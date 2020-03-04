

const addPost="ADD-POST"
const changeInput ="CHANGE-INPUT"

//эксшн криэйторы // used in ui// for udobstvo ;0

export const AddPostActionCreator=(text)=>{ 
    return{type:addPost,post:text}
}


export const ChangeInputActionCreator=(text)=>{ // used in ui
    return{type:changeInput,defaultPostValue:text}
}

const initialState= {
    posts:[
        {name:'vanya',id:1,likes:2,post:'i love u'},
        {name:'john',id:2,likes:2,post:'mazda'},
        {name:'gena',id:3,likes:2,post:'bmw'},
        {name:'GHalya',id:4,likes:2,post:'sprooot'}],

    defaultPostValue:'post here'    
    }

const ProfilePageReducer = (state=initialState,action)=>{
    
    switch(action.type){
        case addPost:
            console.log(state,action);
            state.posts.push({
                name:'Volodya',
                id:6,
                likes:0,
                post:action.post})
        return state
        case changeInput:
            state.defaultPostValue=action.defaultPostValue 
        return state   
        default:return state}
    }

export default ProfilePageReducer;