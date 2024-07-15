import React, { useState, useEffect } from 'react';

const PostComponent = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  const handleNextPost = () => {
    setPostId((prevId) => prevId + 1);
  };

  const handlePrevPost = () => {
    setPostId((prevId) => (prevId > 1 ? prevId - 1 : 1));
  };

  return (
    <div className="container">
      {post && (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p className="post-id">Post ID: {postId}</p>
        </div>
      )}
      <button onClick={handlePrevPost} disabled={postId === 1}>
        Post Precedente
      </button>
      <button onClick={handleNextPost}>Post Successivo</button>
    </div>
  );
};

export default PostComponent;
