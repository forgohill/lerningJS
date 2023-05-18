import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;