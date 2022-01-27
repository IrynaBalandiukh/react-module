import React from 'react';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {postsService} from '../../services/posts.service';

import PostComments from '../../components/PostComments/PostComments';

const PostCommentsPage = () => {
    const {id} = useParams();
    console.log(id)
    const [postComments, setPostComments] = useState([]);

    useEffect(() => {
        postsService.getCommentsById(id).then(value => setPostComments(value))
    }, [])
    return (
        <div>
            {postComments.map(comment => <PostComments key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};
