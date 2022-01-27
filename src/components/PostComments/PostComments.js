import React from 'react';

import css from './PostComments.module.css';

const PostComments = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div className={css.item}>
            <div>Post id:{postId}   Comment id: {id}</div>
            <h4>Name: {name}</h4>
            <div>Email: {email}</div>
            <p>Text: {body}</p>
        </div>
    );
};

export default PostComments;