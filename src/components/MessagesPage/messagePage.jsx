import React from 'react';
import DialogItem from './dialogItem/dialogItem'
import classes from './messages.module.css'


export default function Messages(props){
console.log(props.messagesPage);

const messages = props.messagesPage.messages.map((i,k)=>{
return(<div key={k}><textarea defaultValue={i.message}></textarea><button>send!</button></div>)
})

return(<div className={classes.talk}>
    <div><DialogItem names={props.messagesPage.names}></DialogItem></div>
    <div> {messages}</div>
    </div>
    )
}