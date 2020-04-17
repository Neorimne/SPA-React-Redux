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
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, post],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    };
};

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