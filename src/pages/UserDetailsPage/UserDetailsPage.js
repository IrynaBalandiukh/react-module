import React from 'react';
import {useState, useEffect} from 'react';
import {Outlet, useParams, useLocation, NavLink} from 'react-router-dom';

import {usersService} from '../../services/users.service';
import css from './UserDetails.module.css';

const UserDetailsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [user, setUser] = useState({});

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }

        usersService.getById(id).then(value => setUser({...value}))
    }, [])

    return (
        <div className={css.item}>
            <div>User id - {user.id}</div>
            <div>Name - {user.name}</div>
            <div>Username - {user.username}</div>
            <div>Email - {user.email}</div>
            <NavLink to='posts' state={state}>
                <button>user posts</button>
            </NavLink>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};