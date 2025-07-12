import React, { useState } from "react";
import "./RegistroBebidas.css"; // Importa estilos externos
import cervezaImg from "./assets/homerocerveza.png";
import piscolaImg from "./assets/piscola.png";
import jugoImg from "./assets/jugo.png";
import otros1Img from "./assets/caipiriña.png";
import otros2Img from "./assets/whisky.png";


// Definimos el array inicial con las bebidas y cantidades en cero
const bebidasIniciales = [
  { id: 1, nombre: "Cerveza", imagen:cervezaImg, cantidad: 0 },
  { id: 2, nombre: "Piscola", imagen: piscolaImg, cantidad: 0 },
  { id: 3, nombre: "Jugo", imagen: jugoImg, cantidad: 0 },
  { id: 4, nombre: "Otros 1", imagen: otros1Img, cantidad: 0 },
  { id: 5, nombre: "Otros 2", imagen: otros2Img, cantidad: 0 },
];

function RegistroBebidas() {
  // Estado para manejar cantidades de bebidas consumidas
  const [bebidas, setBebidas] = useState(bebidasIniciales);
  // Estado para manejar precios ingresados para cada bebida
  const [precios, setPrecios] = useState({});

  // Incrementa la cantidad consumida de la bebida con id dado
  const incrementarCantidad = (id) => {
    setBebidas((prevBebidas) =>
      prevBebidas.map((bebida) =>
        bebida.id === id
          ? { ...bebida, cantidad: bebida.cantidad + 1 }
          : bebida
      )
    );
  };

  // Actualiza el precio ingresado para la bebida con id dado
  const manejarPrecioChange = (id, valor) => {
    const precio = parseFloat(valor);
    setPrecios((prevPrecios) => ({
      ...prevPrecios,
      [id]: isNaN(precio) ? 0 : precio,
    }));
  };

  // Resetea cantidades y precios a valores iniciales
  const resetearConsumoYPrecios = () => {
    setBebidas((prevBebidas) =>
      prevBebidas.map((bebida) => ({ ...bebida, cantidad: 0 }))
    );
    setPrecios({});
  };

  // Calcula el total de tragos consumidos sumando cantidades
  const totalTragos = bebidas.reduce(
    (sum, bebida) => sum + bebida.cantidad,
    0
  );

  // Calcula el total a pagar sumando cantidad * precio para cada bebida
  const totalPagar = bebidas.reduce((sum, bebida) => {
    const precio = precios[bebida.id] || 0;
    return sum + bebida.cantidad * precio;
  }, 0);

  return (
    <div className="contenedor">
      {/* Título principal */}
      <h2 className="titulo">Registro de Consumo de Bebidas</h2>

      {/* Listado de bebidas con imagen, nombre, cantidad y botón para incrementar */}
      {bebidas.map((bebida) => (
        <div key={bebida.id} className="bebida-item">
          <img
            src={bebida.imagen}
            alt={bebida.nombre}
            className="bebida-imagen"
          />
          <div className="bebida-info">
            <strong>{bebida.nombre}</strong>
            <div>Cantidad: {bebida.cantidad}</div>
          </div>
          <button
            className="boton-incrementar"
            onClick={() => incrementarCantidad(bebida.id)}
          >
            +
          </button>
        </div>
      ))}

      {/* Formulario para ingresar precios */}
      <h3>Ingrese el precio de cada bebida :</h3>
      {bebidas.map((bebida) => (
        <div key={bebida.id} className="precio-item">
          <label
            htmlFor={`precio-${bebida.id}`}
            className="precio-label"
          >
            {bebida.nombre}:
          </label>
          <input
            type="number"
            id={`precio-${bebida.id}`}
            min="0"
            step="0.01"
            value={precios[bebida.id] || ""}
            onChange={(e) => manejarPrecioChange(bebida.id, e.target.value)}
            className="precio-input"
            placeholder="Ej: 1500"
          />
        </div>
      ))}

      {/* Línea separadora */}
      <hr />

      {/* Totales consumidos y a pagar */}
      <div>
        <strong>Total de tragos consumidos:</strong> {totalTragos}
      </div>
      <div>
        <strong>Total a pagar:</strong>{" "}
        {new Intl.NumberFormat("es-CL", {
          style: "currency",
          currency: "CLP",
        }).format(totalPagar)}
      </div>

      {/* Botón para resetear consumos y precios */}
      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={resetearConsumoYPrecios}
      >
        Reiniciar consumo y precios
      </button>
    </div>
  );
}

export default RegistroBebidas;
