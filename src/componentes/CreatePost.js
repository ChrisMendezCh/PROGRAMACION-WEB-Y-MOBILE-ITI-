import React, { useState } from 'react';
import API from '../services/api';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        API.post('/posts', { title, body })
            .then((response) => {
                console.log('Post created:', response.data);
            })
            .catch((error) => {
                console.error('Error creating post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Post</h1>
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
            <button type="submit">Create</button>
        </form>
    );
};

export default CreatePost;