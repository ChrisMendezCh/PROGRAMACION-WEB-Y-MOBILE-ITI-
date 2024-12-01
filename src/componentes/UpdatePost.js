import React, { useState } from 'react';
import API from '../services/api';

const UpdatePost = ({ postId }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleUpdate = (e) => {
        e.preventDefault();
        API.put(`/posts/${postId}`, { title, body })
            .then((response) => {
                console.log('Post updated:', response.data);
            })
            .catch((error) => {
                console.error('Error updating post:', error);
            });
    };

    return (
        <form onSubmit={handleUpdate}>
            <h1>Update Post</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdatePost;