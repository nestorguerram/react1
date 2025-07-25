import React from "react";// Importa lo hooks para obtener datos de navegación y para navegar 
import { useLocation, useNavigate } from "react-router-dom"; // Importamos la imagen que usaremos como fondo
import react3d from "./assets/react3d.png"; // Importamos el archivo CSS 
import "./Dashboard.css";

function Dashboard() {
  // se usa el useLocation nos permite acceder al estado que se paso desde la navegacion previa
  const location = useLocation();
  // useNavigate  da la función para cambiar de página
  const navigate = useNavigate();
  // Extraemos el nombre de usuario del estado, o usamos "usuario" como valor por defecto
  const user = location.state?.user || "usuario";

  return (
    // Contenedor principal del Dashboard con fondo dinamico usando inline style
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${react3d})` }}
    >
      {/* Cuadro central semi-transparente con contenido */}
      <div className="dashboard-box">
        {/* Título de bienvenida personalizado */}
        <h2>¡Bienvenido, {user}!</h2>
        {/* Texto informativo */}
        <p>Has iniciado sesión correctamente.</p>
        {/* Boton para navegar a la página principal "home" */}
        <button
          className="dashboard-button"
          onClick={() => navigate("/registro-bebidas")}// Al hacer clic, se navega a la ruta "/registro-bebidas"
        >
          Vamos a la App
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
