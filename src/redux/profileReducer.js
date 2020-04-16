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
    /* let stateCopy = {...state};
    stateCopy.postData = [...state.postData]
    if (action.type === ADD_POST){
        let post = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        }
        
        stateCopy.postData.push(post);
        stateCopy.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        stateCopy.newPostText = action.newText;
    }
    
    return stateCopy; */
    switch(action.type){
        case ADD_POST: {
            let post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }  
        case UPDATE_NEW_POST: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:     
            return state;
    }; 
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