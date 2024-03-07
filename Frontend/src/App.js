import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { Addpage } from './pages/Addpage';
import EditPage from './pages/EditPage';


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path="/company/add" Component={Addpage}/>
        <Route path="/company/edit" Component={EditPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;