import React from 'react';
import Dialogs from './Dialogs/Dialogs'
import {Redirect} from 'react-router-dom'

const Messages=(props)=>{


    if(!props.login){
        return <Redirect to={"/login"}/>
    }
const addText=()=>{
    props.sendMessage('kdk')
}




return(<div>
        <h2>MESSAGE PAGE</h2>

        <button onClick={()=>{addText()}}>addText</button>

        
        <Dialogs names={props.names}
                messages={props.messages}
                sendMessage={(text)=>{props.sendMessage(text)}}
        />
                    </div>)
                            }

export default Messages;