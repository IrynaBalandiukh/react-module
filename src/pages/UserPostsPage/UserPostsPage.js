import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {usersService} from '../../services/users.service';
import UserPosts from '../../components/UserPostsComponent/UserPosts';

const UserPostsPage = () => {
    const {id} = useParams();
    console.log(id)
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        usersService.getPostsById(id).then(value => setUserPosts(value))
    }, [])
    return (
        <div>
            {userPosts.map(post => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};