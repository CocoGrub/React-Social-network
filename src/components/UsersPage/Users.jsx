import React from 'react';
import * as axios from 'axios'



const MyFriends=(props)=>{
    if(props.users.length ===0){
        props.setUsers([
            {id:1,name:'vasya',friend:true,status:'hot dog'},
            {id:2,name:'Gena',friend:true,status:'robo chicken'},
            {id:3,name:'EVGEN',friend:false,status:'mazeratti'}, 
            {id:4,name:'Olga',friend:true,status:'popcorn'}
        ])
    
    }
    console.log(props.users.length);
    
    
    // const friends = props.friends.map((x,k)=>{
    //     return(<div key = {k}> {x.name}</div>)
    // })

  
    const users =  props.users.map((x,y)=>{
        return(<div key={y}>
            <span>{x.name}</span>
        </div>)
    })
    
    // const users = userz.map((x,key)=>{
    // return(<div key={key}>{x}</div>)
    // })

    return(<div>
        
       
        {users}
    </div>)
}

export default MyFriends;


