import React from "react"; // Importa React para crear componentes
import logo from "./assets/logo.svg"; // Importa la imagen del logo
import "./Home.css"; // Importa el archivo CSS con los estilos
import { useLocation, useNavigate } from "react-router-dom"; // Importa hooks para navegación y ubicación

function Home() {
  // Obtiene información de la ubicación actual y función para navegar entre rutas
  const location = useLocation();
  const navigate = useNavigate();

  // Obtiene el nombre del usuario desde el estado pasado o localStorage; usa "Usuario" si no hay dato
  const nombre =
    location.state?.nombre || localStorage.getItem("nombreUsuario") || "Usuario";

  return (
    // Contenedor principal centrado
    <div className="home-container">
      {/* Logo animado */}
      <img src={logo} alt="Logo React svg" className="logo-spin home-logo" />

      {/* Saludo personalizado */}
      <h1>¡Bienvenido a React, {nombre}!</h1>
      <p>Has registrado exitosamente tu cuenta. Ya puedes usar el sistema.</p>

      {/* Contenedor para botones alineados en fila y centrados */}
      <div className="botones-container">
        {/* Botón para ir al manual */}
        <button
          onClick={() => navigate("/manual")} // Navega a la ruta /manual al hacer clic
          className="home-button" // Aplica estilos uniformes de boton
        >
          Continuar al Manual
        </button>

        {/* Botón para ir a la app de registro */}
        <button
          onClick={() => navigate("/registro-bebidas")} // Navega al registro al hacer clic
          className="home-button" // Aplica los mismos estilos que el otro botn
          style={{ marginLeft: "15px" }} // Añade espacio a la izquierda para separar botones
        >
          Vamos a la App
        </button>
      </div>
    </div>
  );
}

export default Home; // Exporta el componente para usarlo en la app
