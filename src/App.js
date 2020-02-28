import React from 'react';
import './App.css';
import Myhead from './components/header/header'
import Navigate from './components/navigation/navigate'
import Commentary from './components/content/commentary'
import Profile from './components/content/profile/profile'
import Myfooter from './components/footer/myFooter'
import {BrowserRouter,Route} from 'react-router-dom'


function App() {
  return (

    <div className="App">
    <BrowserRouter>
      <Myhead/>
      <Navigate/>
      <div className='content'>
    <Route path='/comments' component={Commentary}></Route>
    <Route exact path='/profile' component={Profile}></Route>
    </div>

      <Myfooter/>

    </BrowserRouter>
    </div>
  );
}

export default App;
