// Cierre.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cierre.css";
import fondoCierre from "./assets/fondoCierre.png";

export default function Cierre() {
  const navigate = useNavigate();

  return (
    <div
      className="paginaCierre"
      style={{ backgroundImage: `url(${fondoCierre})` }}
    >
      {/* Contenedor del contenido centrado y desplazado hacia abajo */}
      <div className="contenidoCierre">
        <h1>¡Gracias por participar!</h1>
        <p>Puedes volver al registro para volver a intentarlo.</p>

        {/* Boton que vuelve al login (ruta /) */}
        <button className="botonCierre" onClick={() => navigate("/")}>
          Volver al Login
        </button>
      </div>
    </div>
  );
}
