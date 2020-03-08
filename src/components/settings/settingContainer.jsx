import Settings from './Settings'
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





const SettingsContainer = connect(mapStateToProps,MapDispatchToProps)(Settings)




export default SettingsContainer;