import React from 'react';
import API from '../services/api';

const DeletePost = ({ postId }) => {
    const handleDelete = () => {
        API.delete(`/posts/${postId}`)
            .then(() => {
                console.log('Post deleted');
            })
            .catch((error) => {
                console.error('Error deleting post:', error);
            });
    };

    return <button onClick={handleDelete}>Delete Post</button>;
};

export default DeletePost;