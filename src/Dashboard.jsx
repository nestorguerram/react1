// src/Dashboard.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user || "usuario";

  return (
    <div style={{
      textAlign: "center",
      marginTop: 80,
      background: "#fff",
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 30,
      borderRadius: 16,
      boxShadow: "0 4px 18px #0002"
    }}>
      <h2>¡Bienvenido, {user}!</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: 18,
          padding: "10px 28px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: "1.07em",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Dashboard;
