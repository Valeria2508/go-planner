import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import DayByDay from './components/daybyday';
import StopDetail from './components/StopDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerario" element={<DayByDay />} />
        <Route path="/parada/:id" element={<StopDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
