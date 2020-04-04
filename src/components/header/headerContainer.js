import React from "react";
import * as axios from "axios";
import Header from './header'
import {connect} from "react-redux";

import {setUserData} from '../../redux/auth-reduser'

class HeaderApi extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then((res) => {

                if(res.data.resultCode===0){
                    const {id,email,login}=res.data.data
                    this.props.setUserData(id,email,login)
                }


            })
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
export default connect(mapStateToProps,{setUserData})(HeaderApi)