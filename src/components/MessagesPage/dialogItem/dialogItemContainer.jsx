import React from 'react'
import DialogItem from './dialogItem'
import {DialogActionCreator} from '../../../redux/MessagePageReducer'


const dialogItemContainer =(props)=>{

const sendMessage = (text)=>{
    props.store.dispatch(DialogActionCreator(text))
}

const state=props.store.getState()
const messages=state.messagesPage.messages

return (<div>
<DialogItem 
    sendMessage={(text)=>{sendMessage(text)}}
    messages={messages}
></DialogItem>
</div>)


}

export default dialogItemContainer