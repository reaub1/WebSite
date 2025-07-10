import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CollectionClassique from './components/CollectionClassique';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection-classique" element={<CollectionClassique />} />
      </Routes>
    </Router>
  );
}

export default App;