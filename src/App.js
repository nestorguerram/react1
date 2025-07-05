import RegisterForm from './RegisterForm';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import LoginForm from "./LoginForm";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Página de inicio */}
        <Route path="/register" element={<RegisterForm />} /> {/* Página de registro */}
        <Route path="/login" element={<LoginForm />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

