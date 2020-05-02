import React from "react";
import Api from '../../api/api'
import Header from './header'
import {connect} from "react-redux";

import {ThunkLogOut} from '../../redux/auth-reduser'
import { withRouter } from "react-router-dom";

class HeaderApi extends React.Component {
    componentDidMount() {
        // this.props.ThunkSetUserData();
    }
    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.auth
    }
}
export default withRouter(connect(mapStateToProps,{ThunkLogOut})(HeaderApi));
