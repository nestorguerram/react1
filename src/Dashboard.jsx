// src/Dashboard.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import react3d from "./assets/react3d.png";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || "usuario";

  return (
    <div
      style={{
        minHeight: "100vh",                        // Ocupa toda la altura de la pantalla
        backgroundImage: `url(${react3d})`,        // Imagen de fondo
        backgroundSize: "cover",                    // La imagen cubre todo el fondo
        backgroundPosition: "center",               // Centrada
        backgroundRepeat: "no-repeat",              // No se repite
        display: "flex",                            // Para centrar el cuadro
        justifyContent: "center",                   // Centrado horizontal
        alignItems: "center",                       // Centrado vertical
        padding: 20,
      }}
    >
      <div
        style={{
          maxWidth: 400,                            // Ancho máximo del cuadro
          backgroundColor: "rgba(128,128,128,0.55)", // Fondo gris semi-transparente
          padding: 30,                             // Espaciado interno
          borderRadius: 16,                        // Bordes redondeados
          boxShadow: "0 4px 18px #0002",          // Sombra para profundidad
          color: "white",                          // Texto blanco
          textAlign: "center",                     // Texto centrado
        }}
      >
        <h2>¡Bienvenido, {user}!</h2>
        <p>Has iniciado sesión correctamente.</p>
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: 18,
            padding: "10px 28px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: "1.07em",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Comencemos a navegar
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
