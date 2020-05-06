import React from "react";
import Api from '../../api/api'
import Header from './header'
import {connect} from "react-redux";

import {ThunkLogOut} from '../../redux/auth-reduser'
import { withRouter } from "react-router-dom";

const  HeaderApi = (props)=> {
        return <>
            <Header {...props}/>
        </>

}

const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}
export default withRouter(connect(mapStateToProps,{ThunkLogOut})(HeaderApi));
