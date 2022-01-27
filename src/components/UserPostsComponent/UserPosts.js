import React from 'react';

import css from './UserPosts.module.css';

const UserPosts = ({post: {userId, id, title, body}}) => {
    return (
        <div className={css.item}>
            <div>User id:{userId} Post id: {id}</div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default UserPosts;