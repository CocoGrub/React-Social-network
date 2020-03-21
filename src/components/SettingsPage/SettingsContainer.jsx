import SettingsPage from './Settings'
import {connect} from 'react-redux'





const mapStateToProps =(state)=>{
    return{
        color:state.globals.color
    }
}



const MapDispatchToProps=(dispatch)=>{
    return{

    }
}





const SettingsContainer = connect(mapStateToProps,MapDispatchToProps)(SettingsPage)




export default SettingsContainer;