import React from 'react';
import './App.css';
import Myhead from './components/header/header'
import Navigation from './components/navigation/navigation'
import DialogContainer from './components/MessagesPage/DialogContainer'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Myfooter from './components/footer/myFooter'
import SettingsContainer from './components/settings/settingContainer'
import {Route} from 'react-router-dom'




function App() {


  return (

    <div className="App">
      <Myhead/>
      <Navigation/>

        <div className='content'>

      <Route path='/settings' render={()=><SettingsContainer/>}/>

        <Route path='/dialog' render={()=> <DialogContainer/>}/>

        <Route  path='/profile' render = {()=><ProfilePage/> }/>

      </div>
        <Myfooter/>
    </div>

  );
}

export default App;
