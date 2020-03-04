import React from 'react';
import DialogItem from './dialogItem/dialogItem'
import classes from './messages.module.css'
import {DialogActionCreator} from '../../redux/MessagePageReducer';

export default function Messages(props){


const textRef = React.createRef()  
const text =' '
const data = props.store.getState()

console.log(data);
const messages = data.messagesPage.messages.map((i,k)=>{
return(<div key={k}><textarea ref={textRef} defaultValue={i.message}></textarea><button onClick={()=>{props.store.dispatch(DialogActionCreator(text))}}>send!</button></div>)
})

return(<div className={classes.talk}>
    <div><DialogItem names={data.messagesPage.names}></DialogItem></div>
    <div> {messages}</div>

    </div>
    )
}