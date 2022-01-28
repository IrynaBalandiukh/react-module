import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Album.module.css';

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={css.item}>
            <div>User id: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <NavLink to={`${id}/photos`}>
                <button>photos</button>
            </NavLink>
        </div>
    );
};

export default Album;