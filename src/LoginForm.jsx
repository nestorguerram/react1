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

    if (!user || !pass) {
      setError("Ambos campos son obligatorios.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find((u) => u.user === user);

    if (!usuario) {
      setError("El usuario no existe.");
      return;
    }

    if (usuario.password !== pass) {
      setError("Contraseña incorrecta.");
      return;
    }

    setError("");
    const nombreCompleto = usuario.nombre + " " + usuario.apellido;
    localStorage.setItem("nombreUsuario", nombreCompleto);
    navigate("/dashboard", { state: { user: nombreCompleto } });


    navigate("/dashboard", { state: { user: nombreCompleto } });


  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>Iniciar Sesión</h2>

        <label style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
          <span style={{ width: 100, textAlign: "left", marginRight: 10 }}>Email:</span>
          <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              autoComplete="off"
              placeholder="Ingrese su usuario formato ejemplo@email.com"
              className={error && !user ? "input-error" : ""}
            />
          </label>

          <div className="input-row" style={{ alignItems: "flex-end" }}>
            <label style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flex: 1, width: "100%" }}>
              <span style={{ width: 100, textAlign: "left", marginRight: 10 }}>Contraseña:</span>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Ingrese su contraseña"
                className={error && !pass ? "input-error" : ""}
              />
            </label>
          </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
          <button type="submit">Entrar</button>
          <button type="button" onClick={() => navigate("/register")}>
            Registrarse
          </button>
        </div>

        {error && (
          <div className="error" style={{ textAlign: "center", marginTop: 14 }}>
            <div>{error}</div>
            {error === "El usuario no existe." && (
              <>
                <div style={{ marginTop: 7 }}>Si no tienes cuenta, registrarte aqui </div>
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  style={{
                    marginTop: 7,
                    padding: "4px 10px",
                    borderRadius: "5px",
                    border: "1px solid #0072ff",
                    background: "#f7f7ff",
                    color: "#0072ff",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Ir a registro
                </button>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
