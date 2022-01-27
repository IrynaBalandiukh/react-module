import React from 'react';
import {useState, useEffect} from 'react';
import {Outlet, useParams, useLocation, NavLink} from 'react-router-dom';

import {postsService} from '../../services/posts.service';
import css from './PostDetails.module.css';

const PostDetailsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState({});

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }
        postsService.getById(id).then(value => setPost({...value}))
    }, [])

    return (
        <div className={css.item}>
            <div>id - {post.id}</div>
            <div>Title - {post.title}</div>
            <div>Body - {post.body}</div>
            <NavLink to='comments' state={state}>
                <button>post comments</button>
            </NavLink>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};


