import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch list of blog posts
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
