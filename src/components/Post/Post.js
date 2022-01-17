import React from 'react';

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Text: {body}</div>
        </div>
    );
};

export default Post;