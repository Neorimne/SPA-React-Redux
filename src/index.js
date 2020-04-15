import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import store from './redux/reduxStore';


let rerenderEntrieTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} 
                 store = {store}
                 />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntrieTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntrieTree(state);
});




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();