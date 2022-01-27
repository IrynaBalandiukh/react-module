import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className={css.item}>
            <NavLink to={id.toString()} state={post}><h3>{title}</h3> {body}</NavLink>
        </div>
    );
};

export default Post;
