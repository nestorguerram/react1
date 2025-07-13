import React, { useState } from "react";
import avatarHombre from "./assets/hombre.png";
import avatarMujer from "./assets/mujer.png";
import avatarOtros from "./assets/donaldtrump.gif";
import ojosIcon from "./assets/ojos.png";


import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";  // Importamos el CSS separado

function RegisterForm() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    genero: "masculino",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [fueEnviado, setFueEnviado] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  const validarNombre = (valor) => {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor))
      return "El nombre debe tener al menos 2 letras y no contener números.";
    return "";
  };
  const validarApellido = (valor) => {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor))
      return "El apellido debe tener al menos 2 letras y no contener números.";
    return "";
  };
  const validarEmail = (valor) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor))
      return "El email debe tener un formato válido (ej: ejemplo@mail.com).";
    return "";
  };
  const validarPassword = (valor) => {
    if (!/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}.*$/.test(valor)) {
      return "La contraseña debe tener 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.";
    }
    return "";
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const mostrarToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFueEnviado(true);

    const nuevosErrores = {};
    if (validarNombre(form.nombre)) nuevosErrores.nombre = validarNombre(form.nombre);
    if (validarApellido(form.apellido)) nuevosErrores.apellido = validarApellido(form.apellido);
    if (validarEmail(form.email)) nuevosErrores.email = validarEmail(form.email);
    if (validarPassword(form.password)) nuevosErrores.password = validarPassword(form.password);

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    if (!nuevosErrores.email && usuarios.find(u => u.user === form.email)) {
      nuevosErrores.email = "El email ya está registrado.";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      usuarios.push({
        user: form.email,
        password: form.password,
        nombre: form.nombre,
        apellido: form.apellido,
        genero: form.genero,
      });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      setSuccess(true);
      setFueEnviado(false);
      mostrarToast();

      const nombreCompleto = form.nombre + " " + form.apellido;
      navigate("/home", { state: { nombre: nombreCompleto } });

      setForm({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        genero: "masculino",
      });
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h2 className="register-form-title">Registro</h2>

        <div className="avatar-container">
          {form.genero === "masculino" && (
            <img src={avatarHombre} alt="Avatar hombre" width={80} />
          )}
          {form.genero === "femenino" && (
            <img src={avatarMujer} alt="Avatar mujer" width={140} />
          )}
          {form.genero === "otro" && (
            <img src={avatarOtros} alt="Avatar otro" width={80} />
          )}
        </div>

        <label className="form-label">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className={fueEnviado && errors.nombre ? "input-error" : ""}
          />
          <small className="info-text">Al menos 2 letras, sin números.</small>
          {fueEnviado && errors.nombre && <span className="error">{errors.nombre}</span>}
        </label>

        <label className="form-label">
          Apellido:
          <input
            type="text"
            name="apellido"
            value={form.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            className={fueEnviado && errors.apellido ? "input-error" : ""}
          />
          <small className="info-text">Al menos 2 letras, sin números.</small>
          {fueEnviado && errors.apellido && <span className="error">{errors.apellido}</span>}
        </label>

        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@mail.com"
            className={fueEnviado && errors.email ? "input-error" : ""}
          />
          <small className="info-text">Debe tener un formato válido, como ejemplo@correo.cl</small>
          {fueEnviado && errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label className="form-label">
          Contraseña:
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Contraseña segura"
              className={fueEnviado && errors.password ? "input-error" : ""}
              style={{ paddingRight: "40px", boxSizing: "border-box", width: "100%" }}
            />
            <img
              src={ojosIcon}
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
          <small className="info-text">
            Al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, 1 símbolo.
          </small>
          {fueEnviado && errors.password && <span className="error">{errors.password}</span>}
        </label>


        <label className="form-label">
          Género:
          <select
            name="genero"
            value={form.genero}
            onChange={handleChange}
            className="select-gender"
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </label>

        <button type="submit" className="register-btn">
          Registrarse
        </button>

        {fueEnviado && Object.values(errors).length > 0 && !success && (
          <p className="error general-error">Revisa los campos marcados en rojo.</p>
        )}

        {toastVisible && <div className="toast-exito">¡Registro exitoso!</div>}
      </form>
    </div>
  );
}

export default RegisterForm;
