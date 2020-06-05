const sendMessage ="SEND-MESSAGE"

type DialogActionCreatorType={
    type:typeof sendMessage
    message:string
}
 export const DialogActionCreator=(text:string):DialogActionCreatorType=>{
    
    return{type:sendMessage,message:text }
}
type NamesType={
    id:number
    name:string
}
type MessagesType={
    id:number
    message:string
}
const initialState={
    names:[
        {id:1,name:'vanya'},
        {id:2,name:'john'},
        {id:3,name:'gena'},
        {id:4,name:'GHalya'},
        {id:5,name:'Monk'}
        ]as Array<NamesType>,
    messages:[
        {id:1,message:'privet',},
        {id:2,message:'how are u'},
        {id:3,message:'sobaka'},
        {id:4,message:'cat'}
        ] as Array<MessagesType>,
    }
type initialStateType=typeof initialState
const MessagePageReducer = (state=initialState,action:any):initialStateType=>{

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
