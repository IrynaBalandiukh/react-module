import React from 'react';
import {useState, useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import {postsService} from '../../services/posts.service';
import Post from '../../components/PostComponent/Post';
import css from './Posts.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className={css.wrapper}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};
