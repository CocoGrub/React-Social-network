import React from 'react';
import Dialogs from './Dialogs/Dialogs'


const Messages=(props)=>{


console.log('messagePage',props)

const addText=()=>{
    props.sendMessage('kdk')
}

return(<div>
        <h2>Очень важные Разговорчики</h2>

        <button onClick={()=>{addText()}}>wwww</button>

        
        <Dialogs names={props.names}
                messages={props.messages}
                sendMessage={(text)=>{props.sendMessage(text)}}
        />
                    </div>)
                            }

export default Messages;