import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';

const App = (props) => {
    return (
        <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                    render={()=> <DialogsContainer store={props.store} />} />
                <Route path="/profile" 
                    render={()=> <Profile store={props.store} />} />
                <Route path="/users"
                    render={()=> <UsersContainer />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
        </BrowserRouter>
    )
};
export default App;