
const sendMessage ="SEND-MESSAGE"

export const DialogActionCreator=(text)=>{ 
    return{type:sendMessage,message:text}
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
    switch(action.type){
        case sendMessage: state.messages.push({id:5,message:'hotdog'})
            return state
        default:return state
    }
}

export default MessagePageReducer