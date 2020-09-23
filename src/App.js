import React from 'react';
import { BrowserRouter } from "react-router-dom";
import FetchWeather from './component/FetchWeather'
import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <FetchWeather />
    </BrowserRouter>
  );
}

export default App;
