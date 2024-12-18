import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Drops from './pages/Drops';
import ProductDetail from './pages/ProductDetail';
import Reveal from './pages/Reveal';
import Claim from './pages/Claim';
import MarketPlace from './pages/MarketPlace';
import Story from './pages/Story';
import Bio from './pages/Bio';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [userPhoto, setUserPhoto] = useState(null);

  if (showLanding) {
    return <Home onEnter={() => setShowLanding(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main userPhoto={userPhoto}/>} />
        <Route path="/main" element={<Main userPhoto={userPhoto}/>} />
        <Route path="/drops" element={<Drops userPhoto={userPhoto}/>} />
        <Route path="/product" element={<ProductDetail userPhoto={userPhoto}/>} />
        <Route path="/reveal" element={<Reveal userPhoto={userPhoto}/>} />
        <Route path="/claim" element={<Claim userPhoto={userPhoto}/>} />
        <Route path="/marketplace" element={<MarketPlace userPhoto={userPhoto}/>} />
        <Route path="/story" element={<Story userPhoto={userPhoto}/>} />
        <Route path="/profile" element={<Bio userPhoto={userPhoto} setUserPhoto={setUserPhoto}/>} />
      </Routes>
    </Router>
  );
};

export default App;
