// src/Home.jsx
import React from "react";
import logo from "./assets/logo.svg"; // Asegúrate de que la ruta sea correcta
import "./Home.css"; // Asegúrate de tener un archivo CSS para los estilos
import { useLocation, useNavigate } from "react-router-dom";



  //<h1>¡Bienvenido a React, {nombre}!</h1>


  function Home() {
  // Obtenemos el estado pasado en la navegación o fallback de localStorage o "Usuario"
  const location = useLocation();
  const navigate = useNavigate();
  const nombre = location.state?.nombre || localStorage.getItem("nombreUsuario") || "Usuario";

    return (
      // Contenedor principal con clase para estilos CSS
      <div className="home-container">
        {/* Logo con animación y clase para estilos */}
        <img
          src={logo}
          alt="Logo React svg"
          className="logo-spin home-logo"
        />

        {/* Mensaje de bienvenida personalizado */}
        <h1>¡Bienvenido a React, {nombre}!</h1>
        <p>Has registrado exitosamente tu cuenta. Ya puedes usar el sistema.</p>

        {/* Botón para continuar, con clase para estilos y evento onClick */}
        <button
          onClick={() => navigate("/manual")}
          className="home-button"
        >
          Continuar al Manual
        </button>
      </div>
    );
  }

export default Home;