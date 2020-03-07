import React from 'react';



const Settings =(props)=>{
    console.log(props.store.store.getState().globals.color);
    
    return(<div>

    <span>color is {props.store.store.getState().globals.color}</span>

    </div>)



}



export default Settings