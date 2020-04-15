import style from './MyPosts.module.css';
import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    let postElements = props.posts
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
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className = {style.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;