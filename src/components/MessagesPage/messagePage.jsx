import React from 'react';
import DialogItemContainer from './dialogItem/dialogItemContainer'
import classes from './messages.module.css'


export default function Messages(props){


console.log(props);

const names= props.store.getState().messagesPage.names.map((i,k)=>{
return(<div key={k}>{i.name}</div>)
})

return(<div className={classes.talk}>
    <div><DialogItemContainer store={props.store}></DialogItemContainer></div>
    <div> {names}</div>

    </div>
    )
}