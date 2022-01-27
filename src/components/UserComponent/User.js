import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={css.item}>
            <NavLink to={id.toString()} state={user}>{name} {username}</NavLink>
        </div>
    );
};

export default User;