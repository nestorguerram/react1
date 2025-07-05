// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Bienvenido al Sistema</h1>
      <button onClick={() => navigate("/login")} style={{ margin: 10 }}>Iniciar Sesión</button>
      <button onClick={() => navigate("/register")} style={{ margin: 10 }}>Registrarse</button>
    </div>
  );
}

export default Home;
