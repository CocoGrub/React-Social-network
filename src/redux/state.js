import ProfilePageReducer from './ProfileReducer'
import MessagePageReducer from './MessagePageReducer'
const store={
    _state:{
        messagesPage:{
            names:[
                {id:1,name:'vanya'},
                {id:2,name:'john'},
                {id:3,name:'gena'},
                {id:4,name:'GHalya'},
                {id:5,name:'Monk'}],
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
        console.log('rerender');
        
    },
    
    Subscribe(watcher){
        this._Rerender=watcher
    
    },
    
    changeInput(post){
        if(post){
            this._state.profilePage.defaultPostValue=post
        }
        console.log(this.state);
        
        this._Rerender(this._state)
    },

    dispatch(action){ // only dispacth change state
        this._state.profilePage=ProfilePageReducer(this._state.profilePage,action)
        this._state.messagesPage=MessagePageReducer(this._state.messagesPage,action)
        this._Rerender(this._state)}
}

export default store


