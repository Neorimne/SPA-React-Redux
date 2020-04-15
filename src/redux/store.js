import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {

        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you", likesCount: 2 },
                { id: 2, message: "It's my first post", likesCount: 5 }
            ],
            newPostText: 'test'
        },

        messagesPage: {
            dialogData: [
                { id: 1, name: "settelleylol" },
                { id: 2, name: "ArmenDMen" },
                { id: 3, name: "SoulCold" }
            ],
            messageData: [
                { id: 1, message: "Hey" },
                { id: 2, message: "wazzup" },
                { id: 3, message: "I gotta React" }
            ],
            newMessageBody: ''
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    } 
};

export default store;














