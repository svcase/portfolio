import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
