// src/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function LoginForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lee los usuarios registrados del localStorage (devuelve [] si no hay ninguno)
    //const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    //const usuario = usuarios.find(u => u.user === user);

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find(u => u.user === user); // email 





    if (!user || !pass) {
      setError("Ambos campos son obligatorios.");
      return;
    }
    if (!usuario) {
      setError("El usuario no existe.");
      return;
    }
    if (usuario.password !== pass) {
      setError("Contraseña incorrecta.");
      return;
    }
    // hasta aqui el login es exitoso
    setError("");
    navigate("/dashboard", { state: { user } });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>Iniciar Sesión</h2>
        {/* Email */}
        <label>
          Email:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="off"
            className={error && !user ? "input-error" : ""}
            placeholder="Ingrese su usuario formato ejemplo@email.com"
          />
        </label>
        {/* Contraseña y botón en la misma fila */}
        <div className="input-row">
          <label style={{ flex: 1 }}>
            Contraseña:
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className={error && !pass ? "input-error" : ""}
              placeholder="Ingrese su contraseña"
            />
          </label>
          <button type="submit">Entrar</button>
        </div>
        {error && (
          <span className="error">
            {error}
            {error === "El usuario no existe." && (
              <button
                type="button"
                onClick={() => navigate("/register")}
                style={{
                  marginLeft: 12,
                  padding: "4px 10px",
                  borderRadius: "5px",
                  border: "1px solid #0072ff",
                  background: "#f7f7ff",
                  color: "#0072ff",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Ir a registro
              </button>
            )}
          </span>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
