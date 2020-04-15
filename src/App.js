import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

const App = (props) => {
    return (
        <BrowserRouter>
        <div className = 'app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                    render={()=> <Dialogs store={props.store} />} />
                <Route path="/profile" 
                    render={()=> <Profile 
                        profilePage={props.state.profilePage} 
                        dispatch={props.dispatch}
                        newPostText={props.state.profilePage.newPostText}/>} 
                        />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
        </BrowserRouter>
    )
};
export default App;