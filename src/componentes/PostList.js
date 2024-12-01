import React from "react";

const PostList = ({ posts, onEdit, onDelete }) => {
    return (
        <div>
            <h1> Listado de  Publicaciones </h1>
            {posts.map((post) => (
                <div key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => onEdit(post)}>Editar</button>
                    <button className="delete" onClick={() => onDelete(post.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PostList;