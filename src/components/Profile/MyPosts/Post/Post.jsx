import style from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
        <div className = {style.item}>
            <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg"/>
            {props.message}
            <div>
                <span>LIKES: {props.likesCount}</span>
            </div> 
        </div>
    )
};

export default Post;