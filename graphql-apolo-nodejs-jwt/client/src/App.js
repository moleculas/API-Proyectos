import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homePage";
import Register from "./pages/register";
import Login from "./pages/login";
import Navbar from "./components/navbar";

function App() {
  return (
    <div >
      <Navbar />    
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
