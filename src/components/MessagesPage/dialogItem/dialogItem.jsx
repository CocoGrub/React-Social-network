import React from 'react'

const  DialogItem =(props)=>{
    console.log(props);
    
   const textRef = React.createRef()  
    const sendMsg=()=>{
            props.sendMessage(textRef.current.value)
    }


  
    

    const messages = props.messages.map((x,y)=>{

        return <div key={y}>  <textarea ref={textRef} defaultValue={x.message}></textarea>
        <button onClick={()=>{sendMsg()}}>send!</button></div>
        
    })
    
    return(<div>{messages}</div>)
}


export default DialogItem