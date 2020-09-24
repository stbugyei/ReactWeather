import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import FetchWeather from './component/FetchWeather'
import './App.css';


function App() {
  return (
    <Router>
      <FetchWeather />
    </Router>
  );
}

export default App;
