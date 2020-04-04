import React from 'react';
import './App.css';
import HeaderApi from './components/header/headerContainer'
import Navigation from './components/navigation/navigation'
import DialogContainer from './components/MessagesPage/DialogContainer'
import ProfileContainer from './components/ProfilePage/ProfileContainer'
import Myfooter from './components/footer/myFooter'
import SettingsContainer from './components/SettingsPage/SettingsContainer'
import Users from './components/UsersPage/UsersContainer'
import {Route} from 'react-router-dom'


function App() {


    return (

        <div className="App">
            <HeaderApi/>
            <Navigation/>

            <div className='content'>
                <Route path='/myFriends' render={() => <Users/>}/>
                <Route path='/settings' render={() => <SettingsContainer/>}/>
                <Route path='/dialog' render={() => <DialogContainer/>}/>
                <Route path='/profile/:id' render={() => <ProfileContainer/>}/>

            </div>
            <Myfooter/>
        </div>

    );
}

export default App;
