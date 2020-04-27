import api from '../api/api'



const initialState={
    status:"default"
}
 const MyPageReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "setStatus":return{...state,status: action.status};
        default : return state
    }


}


export default MyPageReducer