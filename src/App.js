import React from 'react';
import './App.css';
import Myhead from './components/header/header'
import Navigation from './components/navigation/navigation'
import MessagePage from './components/MessagesPage/messagePage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Myfooter from './components/footer/myFooter'
import {BrowserRouter,Route} from 'react-router-dom'




function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
      <Myhead/>
      <Navigation/>
        <div className='content'>
        <Route path='/dialog' render={()=><MessagePage messagesPage={props.state.messagesPage}  />}/>

        <Route  path='/profile' render = {()=><ProfilePage method={props.method} profile={props.state.profilePage}/> }/>
      </div>
        <Myfooter/>
    </div>
    </BrowserRouter>
  );
}

export default App;
