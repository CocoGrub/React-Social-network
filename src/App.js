import React from 'react';
import './App.css';
import Myhead from './components/header/header'
import Navigation from './components/navigation/navigation'
import MessagePage from './components/MessagesPage/messagePage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import Myfooter from './components/footer/myFooter'
import {BrowserRouter,Route} from 'react-router-dom'




function App(props) {
console.log(props);

  return (
    <BrowserRouter>
    <div className="App">
      <Myhead/>
      <Navigation/>
        <div className='content'>
        <Route path='/dialog' render={()=><MessagePage messagesPage={props.state.messagesPage}  />}/>

        <Route  path='/profile' render = {()=><ProfilePage change={props.state.changeInput} defautltValue={props.state.profilePage.defaultPostValue} addPost={props.state.addPost} profile={props.state.profilePage}/> }/>
      </div>
        <Myfooter/>
    </div>
    </BrowserRouter>
  );
}

export default App;
