import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostAddPage from './pages/PostAddPage';
import PostEditPage from './pages/PostEditPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts" element={<PostListPage />} />
            <Route path="/post_add" element={<PostAddPage />} />
            <Route path="/post_edit/:id" element={<PostEditPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
