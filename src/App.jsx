import React, { useState, useEffect } from "react";
import PostTable from "./components/PostTable";
import PostModal from "./components/PostModal";
import PostDetails from "./components/PostDetails";
import { getItems, createItem, updateItem, deleteItem } from "./components/api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getItems();
    setPosts(data);
  };

  const handleOpenModal = (post = {}) => {
    setSelectedPost(post);
    setIsEditing(!!post.id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPost({});
    setModalOpen(false);
  };

  const handleOpenDetails = (post) => {
    setSelectedPost(post);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => setDetailsOpen(false);

  const handleInputChange = (e) => {
    setSelectedPost({ ...selectedPost, [e.target.name]: e.target.value });
  };

  const handleSavePost = async () => {
    if (isEditing) {
      await updateItem(selectedPost.id, selectedPost);
    } else {
      await createItem(selectedPost);
    }
    fetchPosts();
    handleCloseModal();
  };

  const handleDeletePost = async (id) => {
    await deleteItem(id);
    fetchPosts();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">CRUD Dashboard</h1>
      <button
        onClick={() => handleOpenModal()}
        className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
      >
        Add New Post
      </button>
      <PostTable
        posts={posts}
        onEdit={handleOpenModal}
        onDelete={handleDeletePost}
        onViewDetails={handleOpenDetails}
      />
      <PostModal
        open={modalOpen}
        onClose={handleCloseModal}
        post={selectedPost}
        onChange={handleInputChange}
        onSave={handleSavePost}
      />
      <PostDetails
        open={detailsOpen}
        onClose={handleCloseDetails}
        post={selectedPost}
      />
    </div>
  );
};

export default App;
