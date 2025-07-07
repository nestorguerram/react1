// src/Home.jsx
import React from "react";
import logo from "./assets/logo.svg"; // Asegúrate de que la ruta sea correcta
import "./App.css"; // Asegúrate de tener un archivo CSS para los estilos
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const nombre = location.state?.nombre || localStorage.getItem("nombreUsuario") || "Usuario";

  //<h1>¡Bienvenido a React, {nombre}!</h1>


  return (
    <div style={{
      textAlign: "center",
      marginTop: 80,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      

      <img
        src={logo}
         alt="Logo React svg"
         className="logo-spin"
         width={120}
         style={{ marginBottom: 20 }}
        />

        


      <h1>¡Bienvenido a React, {nombre}!</h1>
      <p>Has registrado exitosamente tu cuenta. Ya puedes usar el sistema.</p>
      <button
        onClick={() => navigate("/manual")}
        style={{
          padding: "10px 30px",
          borderRadius: 8,
          background: "#282c34",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
          marginTop: 25,
          cursor: "pointer"
        }}
      >
        Continuar al Manual
      </button>
    </div>
  );
}

export default Home;
