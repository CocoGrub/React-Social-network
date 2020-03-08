
import Post from './post'
import {AddPostActionCreator,ChangeInputActionCreator} from '../../../redux/ProfileReducer'
import {connect} from 'react-redux'




const mapStateToProps = (state)=>{
    return{
        posts : state.profilePage.posts,
        defaultPostValue : state.profilePage.defaultPostValue
    }
}


const mapDispatchToProps =(dispatch)=>{
    return{
        pushPost:(body)=>{dispatch(AddPostActionCreator(body))},
        changeInput:(body)=>{dispatch(ChangeInputActionCreator(body))}
}
}


const postContainer = connect(mapStateToProps,mapDispatchToProps)(Post)



export default postContainer