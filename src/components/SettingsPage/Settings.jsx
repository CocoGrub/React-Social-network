import React from 'react';
import connectedAuthUserHOC from '../Hoc/AuthUserHOC'


const Settings =(props)=>{
    console.log(props);
    
    return(<div>

    <span>color is {props.color} </span>

    </div>)



}



export default connectedAuthUserHOC(Settings)