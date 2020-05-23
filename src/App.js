import React, { useEffect, Suspense} from 'react';
import './App.css';

import Navigation from './components/navigation/navigation'
import DialogContainer from './components/MessagesPage/DialogContainer'
import ProfileContainer from './components/ProfilePage/ProfileContainer'
import Myfooter from './components/footer/myFooter'

import { Route} from 'react-router-dom'
import Login from "./components/Login/login";
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom'
import {ThunkSetInitialized} from './redux/app-reducer'
import Preloader from './common/preloader/Preloader';

import WithSuspenseHOC from "./components/Hoc/SuspenseHOC";
import MainPage from "./components/MainPage/MainPage";
import UnderDev from "./components/develop/underDev";
import ThemeState from "./context/theme-state";
import Theme from "./components/theme/theme";

const SettingsContainer = React.lazy(() => import('./components/SettingsPage/SettingsContainer'))
const UsersContainer = React.lazy(() => import('./components/UsersPage/UsersContainer'))


const App = (props) => {


    // componentDidMount(){
    //     this.props.ThunkSetInitialized();
    //     console.log(`App`,this.props.isInitialized);

    // }
    useEffect(() => {
        props.ThunkSetInitialized()
        console.log('app init')
    }, [])
    if (props.isInitialized === false) {
        return <Preloader/>
    }

    return (
        <ThemeState>

            <Theme>
            {/*<HeaderApi/>*/}
            <Navigation authorizedID={props.authorizedID}/>


            {/*<Route path='/profile/6834' render={()=><ProfileContainer/>}/>*/}
            <Route exact path='/' render={() => <MainPage/>}></Route>
            <Route path='/myFriends' render={WithSuspenseHOC(UsersContainer)}></Route>
            <Route path='/settings' render={() => <Suspense fallback={<Preloader/>}> <SettingsContainer/> </Suspense>}/>
            <Route path='/dialog' render={() => <DialogContainer/>}/>
            <Route path='/profile/:id' render={() => <ProfileContainer/>}/>
            <Route path={'/about'}><UnderDev/></Route>
            <Route path='/login' render={() => <Login/>}/>


            <Myfooter/>
        </Theme>
        </ThemeState>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.initialized,
        authorizedID: state.auth.id
    }
}


export default withRouter(connect(mapStateToProps, {ThunkSetInitialized})(App))
