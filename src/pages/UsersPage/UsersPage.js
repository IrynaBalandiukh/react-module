import React from 'react';
import {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import {usersService} from '../../services/users.service';
import User from '../../components/UserComponent/User';
import css from './Users.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.wrapper}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};