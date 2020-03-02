import Rerender from '../index'
const state={
    messagesPage:{
        names:[
            {id:1,name:'vanya'},
            {id:2,name:'john'},
            {id:3,name:'gena'},
            {id:4,name:'GHalya'}],
        messages:[
            {id:1,message:'privet',},
            {id:2,message:'how are u'},
            {id:3,message:'sobaka'},
            {id:4,message:'cat'}],
        },
        profilePage:{
        posts:[
            {name:'vanya',id:1,likes:2,post:'i love u'},
            {name:'john',id:2,likes:2,post:'mazda'},
            {name:'gena',id:3,likes:2,post:'bmw'},
            {name:'GHalya',id:4,likes:2,post:'sprooot'}],
            }
    
}



 export const change=(post)=>{
    state.profilePage.posts.push({
        name:'Volodya',
        id:6,
        likes:0,
        post:post
    })
Rerender()
}


export default state