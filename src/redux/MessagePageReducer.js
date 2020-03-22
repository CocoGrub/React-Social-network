const sendMessage ="SEND-MESSAGE"

 export const DialogActionCreator=(text)=>{ 
    
    return{type:sendMessage,message:text }
}

const initialState={
    names:[
        {id:1,name:'vanya'},
        {id:2,name:'john'},
        {id:3,name:'gena'},
        {id:4,name:'GHalya'},
        {id:5,name:'Monk'}],
    messages:[
        {id:1,message:'privet',},
        {id:2,message:'how are u'},
        {id:3,message:'sobaka'},
        {id:4,message:'cat'}],
    }

const MessagePageReducer = (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case sendMessage: 
        const myState={...state}
        myState.messages = [...state.messages]
        myState.messages.push({id:5,message:'hotdog'})
            return myState
        default:return state
    }
}

export default MessagePageReducer
