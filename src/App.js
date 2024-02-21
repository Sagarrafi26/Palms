import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;