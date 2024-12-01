import React from 'react';
import PostList from './componentes/PostList';
import CreatePost from './componentes/CreatePost';
import UpdatePost from './componentes/UpdatePost';
import DeletePost from './componentes/DeletePost';

function App() {
  return (
      <div>
        <CreatePost />
        <PostList />
        {/* Puedes pasar IDs para actualizar o eliminar */}
        <UpdatePost postId={1} />
        <DeletePost postId={1} />
      </div>
  );
}

export default App;
