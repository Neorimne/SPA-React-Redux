import style from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    };

    let postElements = props.postData
        .map((el) => <Post message={el.message} id={el.id} likesCount={el.likesCount} />);
    
    
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea ref={newPostElement} 
                          onChange={onPostChange}
                          value={props.newPostText}
                />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className = {style.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;