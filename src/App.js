import React,{Component, useEffect} from 'react';
import './App.css';
import HeaderApi from './components/header/headerContainer'
import Navigation from './components/navigation/navigation'
import DialogContainer from './components/MessagesPage/DialogContainer'
import ProfileContainer from './components/ProfilePage/ProfileContainer'
import Myfooter from './components/footer/myFooter'
import SettingsContainer from './components/SettingsPage/SettingsContainer'
import UsersContainer from './components/UsersPage/UsersContainer'
import MyPageContainer from "./components/MyPage/MyPageContainer";
import {Route} from 'react-router-dom'
import Login from "./components/Login/login";
import { connect} from 'react-redux';
import {compose } from 'redux'
import {withRouter} from 'react-router-dom'
import {ThunkSetInitialized} from './redux/app-reducer'
import Preloader from './common/preloader/Preloader';



const App = (props)=> {

    // componentDidMount(){
    //     this.props.ThunkSetInitialized();
    //     console.log(`App`,this.props.isInitialized);
        
    // }
    useEffect(()=>{
        props.ThunkSetInitialized()
    },[])
    if(props.isInitialized===false){return <Preloader/>}
    return (

        <div className="App">
            <HeaderApi/>
            <Navigation/>

            <div className='content'>
                {/*<Route path='/profile/6834' render={()=><ProfileContainer/>}/>*/}
                <Route path='/myFriends' render={() => <UsersContainer/>}/>
                <Route path='/settings' render={() => <SettingsContainer/>}/>
                <Route path='/dialog' render={() => <DialogContainer/>}/>
                <Route path='/profile/:id' render={() => <ProfileContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
            <Myfooter/>
        </div>

    );
}

const mapStateToProps=(state)=>{
    return{
        isInitialized:state.app.initialized
    }
}

export default withRouter(connect(mapStateToProps,{ThunkSetInitialized})( App))
