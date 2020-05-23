import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";
import isAuth from '../../App'


const AuthUserHOC = (Component) => {
    return (props) => {
        return <Component {...props}></Component>


    }

}
//
//
// const mapStateToProps = (state) => {
//     return {
//         authorizedID: state.auth.id
//     }
// }
//
// const connectedAuthUserHOC = connect(mapStateToProps, null)(AuthUserHOC)
export default AuthUserHOC