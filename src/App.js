import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Manual from "./Manual"; 
import RegistroBebidas from "./RegistroBebidas"; // Importa el componente RegistroBebidas


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Mostrar LoginForm en la ruta raíz '/' */}
        <Route path="/" element={<LoginForm />} />

        {/* Definir ruta con mayúscula Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/registro-bebidas" element={<RegistroBebidas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

