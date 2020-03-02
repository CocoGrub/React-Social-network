import React from 'react'

export default function DialogItem(props){
    console.log(props.names);
    
    const names = props.names.map((x,y)=>{
        return <div key={y}>{x.name}</div>
        })
    
    return(<div>{names}</div>)
}