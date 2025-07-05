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
    // Solo validación 
    if (!user || !pass) {
      setError("Ambos campos son obligatorios.");
      return;
    }
    setError("");
    // Probar el flujo, redirige al dashboard
    navigate("/dashboard", { state: { user } });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <label>
          Usuario:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="off"
            className={error && !user ? "input-error" : ""}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className={error && !pass ? "input-error" : ""}
          />
        </label>
        {error && <span className="error">{error}</span>}
        <button type="submit" style={{ marginTop: 14 }}>Entrar</button>
      </form>
    </div>
  );
}

export default LoginForm;
