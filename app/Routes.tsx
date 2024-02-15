// app/Routes.tsx

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import HomePage from './routes/HomePage';
import PostPage from './routes/PostPage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter> {/* Wrap your routes with BrowserRouter */}
      <App>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </App>
    </BrowserRouter>
  );
};

export default Routes;
