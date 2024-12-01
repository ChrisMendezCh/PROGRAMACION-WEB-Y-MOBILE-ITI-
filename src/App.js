import React, { useState, useEffect } from "react";
import PostList from "./componentes/PostList";
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        // Cargar datos desde una API externa
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 5))); // Solo mostramos 5 posts
    }, []);

    const createPost = () => {
        const newPost = {
            id: posts.length + 1,
            title,
            body,
        };
        setPosts([...posts, newPost]);
        setTitle("");
        setBody("");
    };

    const deletePost = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    const editPost = (post) => {
        setTitle(post.title);
        setBody(post.body);
        deletePost(post.id);
    };

    return (
        <div className="App">
            <h1>Crear Publicacion</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button onClick={createPost}>Crear</button>
            </form>

            <PostList posts={posts} onEdit={editPost} onDelete={deletePost} />
        </div>
    );
};

export default App;