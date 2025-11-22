import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MatchingPage from './pages/MatchingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/matching" element={<MatchingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
