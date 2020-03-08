import {connect} from 'react-redux';
import MessagePage from './messagePage'
// import DialogActionCreator from '../../redux/MessagePageReducer'
// че за ебаная хуета??????????????????????




const DialogActionCreator=(text)=>{ 

    
    return{type:"SEND-MESSAGE",message:text }
}





const mapStateToProps = (state)=>{
    return{
        names:state.messagesPage.names,
        messages: state.messagesPage.messages
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage:(text)=>{dispatch(DialogActionCreator(text))}
    }
}



const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(MessagePage)



export default DialogContainer;