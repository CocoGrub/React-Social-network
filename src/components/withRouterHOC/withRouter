import React from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const mapStateToProps=(state)=>{return{
    isAuth: state.profilePage.isAuth
}}

const withAuthRedirect = (Component) => {
    function Auth  (){
        return(
            // if (!this.props.isAuth) return <Redirect to="/login"/>
           <Component />

    )
    }


    // const ContainerWrapper = withRouter(Auth)
    // const AutHOC=connect(mapStateToProps)(Auth)
    // return AutHOC
return Auth
};

export default withAuthRedirect;