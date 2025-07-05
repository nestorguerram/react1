import React, { useState } from "react";
import avatarHombre from "./assets/hombre.png";
import avatarMujer from "./assets/mujer.png";
import avatarGato from "./assets/otro.png";
import "./App.css"






// Funciones de validación para cada campo
const validarNombre = (valor) => {
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor)) {
    return "El nombre debe tener al menos 2 letras y no contener números.";
  }
  return "";
};



const validarApellido = (valor) => {
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/.test(valor)) {
    return "El apellido debe tener al menos 2 letras y no contener números.";
  }
  return "";
};

const validarEmail = (valor) => {
  if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor)) {
    return "El email no es válido. Ejemplo: usuario@dominio.com";
  }
  return "";
};

const validarPassword = (valor) => {
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(valor)
  ) {
    return "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.";
  }
  return "";
};

const avatarOptions = {
  masculino: avatarHombre,
  femenino: avatarMujer,
  otro: avatarGato,
};


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
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [fueEnviado, setFueEnviado] = useState(false);


  const avatarOptions = {
  masculino: avatarHombre,
  femenino: avatarMujer,
  otro: avatarGato,
};

  // Actualiza el formulario al escribir
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess(false);
  };

  // Valida todos los campos al enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    setFueEnviado (true);
    const nuevosErrores = {};

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
      setSuccess(true);
      setForm({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        genero: form.genero, // Mantiene el género seleccionado
      });
    } else {
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Registro de Usuario</h2>

      <div style={{ textAlign: "center" }}>
        <img
        src={avatarOptions[form.genero]}
        alt="Avatar"
        style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        />
    </div>


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
        {errors.nombre && (
            <span className="error">{errors.nombre}</span>
        )}
        </label>
        <br />


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
        {errors.apellido && (
          <span className="error">{errors.apellido}</span>
        )}
      </label>
      <br />

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
        <small className="hint">* Debe contener @ y dominio. Ejemplo: usuario@dominio.com</small>
        {errors.email && (
          <span className="error">{errors.email}</span>
        )}
      </label>
      <br />

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
            padding: "4px 10px",
            fontSize: "0.95rem",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid #aaa",
            background: "#f7f7f7"
            }}
            >
        {mostrarPassword ? "Ocultar" : "Mostrar"}
        </button>
        </div>
  
  <small className="hint">
    * Mín. 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.
    </small>
    {errors.password && (
        <span className="error">{errors.password}</span>
        )}
        </label>
        <br />


        

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

      <button type="submit">Registrarse</button>

      {success && (
        <p style={{ color: "green" }}>¡Registro exitoso!</p>
      )}
      {fueEnviado && Object.values(errors).length > 0 && !success && (
        <p style={{ color: "red" }}>
        Revisa los campos marcados en rojo.
        </p>
      )}

    </form>
  );
}

export default RegisterForm;
