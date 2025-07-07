import React, { useState } from "react";
import avatarHombre from "./assets/hombre.png";
import avatarMujer from "./assets/mujer.png";
import avatarOtros from "./assets/otro.png";

import { useNavigate } from "react-router-dom";
import "./App.css";

function RegisterForm() {
  // Estado para los campos del formulario
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    genero: "masculino",
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({});
  // Estado para éxito, toast y envío
  const [success, setSuccess] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [fueEnviado, setFueEnviado] = useState(false);
  

  // Funciones de validación de campos
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
    if (
      !/^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}.*$/.test(valor)
    ) {
      return "La contraseña debe tener 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.";
    }
    return "";
  };

  // Manejo del cambio de campos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpia el error del campo al escribir
  };

  // Mostrar toast por 2 segundos
  const mostrarToast = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  // Manejo de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setFueEnviado(true);

    const nombreCompleto = form.nombre + " " + form.apellido;  // Construir nombre completo

    localStorage.setItem("nombreUsuario", nombreCompleto);     // Guardar en localStorage

    navigate("/home", { state: { nombre: nombreCompleto } }); // Navegar pasando nombre completo


    // Validar campos
    const nuevosErrores = {};
    if (validarNombre(form.nombre)) nuevosErrores.nombre = validarNombre(form.nombre);
    if (validarApellido(form.apellido)) nuevosErrores.apellido = validarApellido(form.apellido);
    if (validarEmail(form.email)) nuevosErrores.email = validarEmail(form.email);
    if (validarPassword(form.password)) nuevosErrores.password = validarPassword(form.password);

    // Validar email único en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    if (!nuevosErrores.email && usuarios.find(u => u.user === form.email)) {
      nuevosErrores.email = "El email ya está registrado.";
    }

    setErrors(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      // Guardar usuario en localStorage
      usuarios.push({
        user: form.email,
        password: form.password,
        nombre: form.nombre,
        apellido: form.apellido,
        genero: form.genero,
      });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      localStorage.setItem("nombreUsuario", form.nombre + " " + form.apellido); // <-- línea mejorada
 // <-- AGREGAR AQUÍ

      setSuccess(true);
      setFueEnviado(false);
      mostrarToast();
      navigate("/home", { state: { nombre: form.nombre } }); //redireccionar a Home después del registro exitoso
      
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
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>Registro</h2>

      <div style={{ textAlign: "center", margin: "10px 0" }}>
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

      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className={fueEnviado && errors.nombre ? "input-error" : ""}
        />
        <small>Al menos 2 letras, sin números.</small>
        {fueEnviado && errors.nombre && (
          <span className="error">{errors.nombre}</span>
        )}
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          className={fueEnviado && errors.apellido ? "input-error" : ""}
        />
        <small>Al menos 2 letras, sin números.</small>
        {fueEnviado && errors.apellido && (
          <span className="error">{errors.apellido}</span>
        )}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ejemplo@mail.com"
          className={fueEnviado && errors.email ? "input-error" : ""}
        />
        <small>Debe ser un email válido y único.</small>
        {fueEnviado && errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Contraseña segura"
          className={fueEnviado && errors.password ? "input-error" : ""}
        />
        <small>
          Al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, 1 símbolo.
        </small>
        {fueEnviado && errors.password && (
          <span className="error">{errors.password}</span>
        )}
      </label>

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

      


      <button type="submit" className="register-btn">
        Registrarse
      </button>

      {/* Mensaje de error general */}
      {fueEnviado && Object.values(errors).length > 0 && !success && (
        <p className="error" style={{ color: "red" }}>
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

export default RegisterForm;
