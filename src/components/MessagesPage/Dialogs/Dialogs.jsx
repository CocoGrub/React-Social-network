import React from 'react';
import {Navlink} from 'react-router-dom'
import classes from './Dialogs.module.css'


const Dialogs = (props)=>{
    console.log(`Dialogs`,props);

    const textRef = React.createRef()
    const sendSMS=()=>{
        console.log(textRef.current.value);
        
        props.sendMessage(textRef.current.value)
    }

    const names=props.names.map((x,k)=>{
        return(<div className={classes.el} key={k}>{x.name}</div>)
    })

    const messages = props.messages.map((x,k)=>{
    return(<div  className={classes.el} key ={k}><textarea ref={textRef} defaultValue={x.message}></textarea><button onClick={sendSMS}>send!</button></div>)
    })
    
    return(<div className={classes.talk}>
    <div >{names}</div>
    <div>{messages}</div>
   
           </div>)
}

export default Dialogs