import React from 'react';
import './App.css';
import Myhead from './components/header/header'
import Navigation from './components/navigation/navigation'
import MessagePage from './components/MessagesPage/messagePage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Myfooter from './components/footer/myFooter'
import SettingsContainer from './components/settings/settingContainer'
import {Route} from 'react-router-dom'
import MagicContext from './redux/reduxContext'



function App(props) {
console.log(props);

  return (

    <div className="App">
      <Myhead/>
      <Navigation/>
        <div className='content'>

        <Route path='/settings' render={()=><MagicContext.Provider value={props}><SettingsContainer/></MagicContext.Provider>}/>

        <Route path='/dialog' render={()=> <MessagePage store={props.store}  />}/>

        <Route  path='/profile' render = {()=><ProfilePage store={props.store} /> }/>
      </div>
        <Myfooter/>
    </div>

  );
}

export default App;
