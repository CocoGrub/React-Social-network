

export const goFriendAC=(id)=>{
    return{type:'GO_FRIEND', id}
}
export const unFriendAC=(id)=>{
    return{type:'UN_FRIEND',id}
}

export const setUsers=(users)=>{
    return{type:'SET_USERS',users}
}


const initialState={
    users:[]
}

const UsersPageReducer = (state=initialState,action)=>{

    switch(action.type){
        case 'SET_USERS':return {...state, users:[...state.users,...action.users]}
                        
        case 'UN_FRIEND':
            return {...state,users:state.users.map((el)=>{
                if(el.id===action.id){
                    return {...el,friend:false}
                }
                return el
            })}
            // return newState;
        case 'GO_FRIEND':
            return {...state,users:state.users.map((el)=>{
                if(el.id===action.id){
                    return {...el,friend:true}
                }
                return el
            })}
        default:return state
    }


}

export default UsersPageReducer;