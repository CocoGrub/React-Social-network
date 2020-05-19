import React from "react";
import Preloader from "../../common/preloader/Preloader";
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";


const AuthUserHOC=(Component)=>{
    return (props)=>{
        if(!props.authorizedID){
            console.log('redirected')
            return <Redirect to="/login"></Redirect>
        }
            return <Component {...props}></Component>
    }
}

export default AuthUserHOC;

const mapStateToProps=(state)=>{
    return{
        authorizedID:state.auth.id
    }
}

const connectedAuthUserHOC=connect(mapStateToProps,{})(AuthUserHOC)