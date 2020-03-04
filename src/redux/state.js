

const store={
    _state:{
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
    
            defaultPostValue:'post here'    
            },
  
    },
    getState(){
        return this._state;
    },

     _Rerender(){
        console.log('start');
        
    },
    
    Subscribe(watcher){
        this.Rerender=watcher
    
    },
          
    _addPost(post){
        if(post){
            this._state.profilePage.posts.push({
                name:'Volodya',
                id:6,
                likes:0,
                post:post
            })
        }
        
    this._Rerender(this._state)
    },

    changeInput(post){
        if(post){
            this._state.profilePage.defaultPostValue=post
        }
        console.log(this.state);
        
        this._Rerender(this._state)
    },


    dispatch(action){
        if(action.type==="ADD-POST"){

            
                this._state.profilePage.posts.push({
                    name:'Volodya',
                    id:6,
                    likes:0,
                    post:action.post
                })
                this.Rerender(this._state)
        }else if(action.type==="CHANGE-INPUT"){
        
                this._state.profilePage.defaultPostValue=action.defaultPostValue
            
            this._Rerender(this._state)

    }
}

}

export default store



const addPost="ADD-POST"
const changeInput ="CHANGE-INPUT"

//эксшн криэйторы

export const AddPostActionCreator=(text)=>{
    return{type:addPost,post:text}
}


export const ChangeInputActionCreator=(text)=>{
    return{type:changeInput,defaultPostValue:text}
}