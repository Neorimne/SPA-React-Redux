import React from 'react';
import MyPosts from "./MyPosts";
import { updateNewPostActionCreator, addPostActionCreator } from '../../../redux/profileReducer';


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText = {onPostChange} 
                 addPost = {addPost} 
                 posts={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}    
                 />
    )
}

export default MyPostsContainer;