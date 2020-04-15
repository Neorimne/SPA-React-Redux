const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you", likesCount: 2 },
        { id: 2, message: "It's my first post", likesCount: 5 }
        ],
    newPostText: 'test'
    }

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST){
        let post = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        }
        state.postData.push(post);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
    }
    
    return state;
    /* switch(action.type){
        case ADD_POST: 
            _addPost(state);
            return state;
        case UPDATE_NEW_POST: 
            _updateNewPost(action.newText);
            return state;
        default:     
            return state;
    }; */ 
};

/* const _addPost = () => {
    let post = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
    }
    state.postData.push(post);
    state.newPostText = '';
} */

/* const _updateNewPost = (newText) => {
    state.newPostText = newText;
} */

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
};

export default profileReducer;