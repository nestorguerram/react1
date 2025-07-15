import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import backgroundImage from "./assets/background.png";
import eyeIcon from "./assets/ojos.png"; 

function LoginForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 16 }}>Iniciar Sesión</h2>

        <label
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ width: 100, textAlign: "left", marginRight: 10 }}>
            Email:
          </span>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="off"
            placeholder="ejemplo@email.com"
            className={error && !user ? "input-error" : ""}
            style={{ width: "100%" }}
          />
        </label>

        <label
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <span style={{ width: 100, textAlign: "left", marginRight: 10 }}>
            Contraseña:
          </span>

          <div style={{ position: "relative", width: "250px" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Ingrese su contraseña"
              className={error && !pass ? "input-error" : ""}
              style={{ width: "100%", paddingRight: "40px" }}
            />
            <img
              src={eyeIcon}
              alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "24px",
                height: "24px",
                cursor: "pointer",
                userSelect: "none",
              }}
            />
          </div>
        </label>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "96px",
          }}
        >
          <button type="submit" className="circular-button">
            Entrar
          </button>

          <button
            type="button"
            onClick={() => navigate("/register")}
            className="circular-button"
          >
            Registrarse
          </button>
        </div>

        {error && (
          <div className="error" style={{ textAlign: "center", marginTop: 14 }}>
            <div>{error}</div>
            {error === "El usuario no existe." && (
              <>
                <div style={{ marginTop: 7 }}>
                  Si no tienes cuenta, registrarte aqui{" "}
                </div>
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  style={{
                    marginTop: 7,
                    padding: "4px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(124, 34, 11)",
                    background: "red",
                    color: "white",
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
