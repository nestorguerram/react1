import React, { useState } from "react";
// Importa los avatares para cada género
import avatarHombre from "./assets/hombre.png";
import avatarMujer from "./assets/mujer.png";
import avatarOtro from "./assets/otro.png";
import "./App.css";

// Objeto para acceder a los avatares según el género seleccionado
const avatarOptions = {
  masculino: avatarHombre,
  femenino: avatarMujer,
  otro: avatarOtro,
};

// Función de validación para el nombre
const validarNombre = (valor) => {
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor)) {
    return "El nombre debe tener al menos 2 letras y no contener números.";
  }
  return "";
};

// Función de validación para el apellido
const validarApellido = (valor) => {
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor)) {
    return "El apellido debe tener al menos 2 letras y no contener números.";
  }
  return "";
};

// Función de validación para el email
const validarEmail = (valor) => {
  if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor)) {
    return "El email no es válido. Ejemplo: usuario@dominio.com";
  }
  return "";
};

// Función de validación para la contraseña
const validarPassword = (valor) => {
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(valor)
  ) {
    return "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";
  }
  return "";
};

// Componente principal de registro de usuario
function RegisterForm() {
  // Estados para el formulario y control de errores, éxito y visualización
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    genero: "masculino",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [fueEnviado, setFueEnviado] = useState(false);
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  // Función para mostrar el toast animado al registrar con éxito
  const mostrarToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  // Maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setFueEnviado(true);
    const nuevosErrores = {};

    // Validaciones para cada campo
    const errorNombre = validarNombre(form.nombre);
    if (errorNombre) nuevosErrores.nombre = errorNombre;

    const errorApellido = validarApellido(form.apellido);
    if (errorApellido) nuevosErrores.apellido = errorApellido;

    const errorEmail = validarEmail(form.email);
    if (errorEmail) nuevosErrores.email = errorEmail;

    const errorPassword = validarPassword(form.password);
    if (errorPassword) nuevosErrores.password = errorPassword;

    setErrors(nuevosErrores);

 if (Object.keys(nuevosErrores).length === 0) {
  // 1. Obtiene los usuarios actuales
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  // 2. Verifica si ya existe un usuario con ese email
  if (usuarios.find(u => u.user === form.email)) {
    setErrors({ ...nuevosErrores, email: "El email ya está registrado." });
    setSuccess(false);
    return;
  }

  // 3. Agrega el nuevo usuario (usa email como campo user)
  usuarios.push({
    user: form.email,             // El email como identificador único
    password: form.password,      // La contraseña
    nombre: form.nombre,
    apellido: form.apellido,
    genero: form.genero
  });

  // 4. Guarda el array actualizado en localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // 5. Estado de éxito, limpieza, toast, etc.
  setSuccess(true);
  setFueEnviado(false);
  mostrarToast();
  setForm({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    genero: form.genero,
  });
} else {
  setSuccess(false);
}

  // Renderiza el formulario
  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Registro de Usuario</h2>

      {/* Avatar según género */}
      <div style={{ textAlign: "center" }}>
        <img
          src={avatarOptions[form.genero]}
          alt="Avatar"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Campo Nombre */}
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          autoComplete="off"
          className={errors.nombre ? "input-error" : ""}
        />
        <small className="hint">* Solo letras, mínimo 2 caracteres.</small>
        {errors.nombre && <span className="error">{errors.nombre}</span>}
      </label>
      <br />

      {/* Campo Apellido */}
      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          autoComplete="off"
          className={errors.apellido ? "input-error" : ""}
        />
        <small className="hint">* Solo letras, mínimo 2 caracteres.</small>
        {errors.apellido && <span className="error">{errors.apellido}</span>}
      </label>
      <br />

      {/* Campo Email */}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="off"
          className={errors.email ? "input-error" : ""}
        />
        <small className="hint">
          * Debe contener @ y dominio. Ejemplo: usuario@dominio.com
        </small>
        {errors.email && <span className="error">{errors.email}</span>}
      </label>
      <br />

      {/* Campo Contraseña */}
      <label>
        Contraseña:
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type={mostrarPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
            style={{ flex: 1 }}
          />
          <button
            type="button"
            onClick={() => setMostrarPassword((prev) => !prev)}
            style={{
              marginLeft: "8px",
              padding: "6px 12px",
              fontSize: "0.95rem",
              cursor: "pointer",
              borderRadius: "6px",
              border: "1px solid #aaa",
              background: "#f7f7f7",
            }}
          >
            {mostrarPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        <small className="hint">
          * Mín. 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.
        </small>
        {errors.password && <span className="error">{errors.password}</span>}
      </label>
      <br />

      {/* Selector Género */}
      <label>
        Género:
        <select
          name="genero"
          value={form.genero}
          onChange={handleChange}
        >
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </label>
      <br />

      {/* Botón de registro */}
      <button type="submit">Registrarse</button>

      {/* Mensaje de éxito */}
      {success && (
        <p style={{ color: "green" }}>¡Registro exitoso!</p>
      )}

      {/* Mensaje de error */}
      {fueEnviado && Object.values(errors).length > 0 && !success && (
        <p style={{ color: "red" }}>
          Revisa los campos marcados en rojo.
        </p>
      )}

      {/* Toast flotante */}
      {toastVisible && (
        <div className="toast-exito">
          ¡Registro exitoso!
        </div>
      )}
    </form>
  );
}
}
// Exporta el componente para usarlo en App.js
export default RegisterForm;  