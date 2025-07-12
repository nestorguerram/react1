import React, { useState } from "react";

// Datos iniciales de las bebidas con nombre e imagen (usaremos URLs o rutas locales)
const bebidasIniciales = [
  { id: 1, nombre: "Cerveza", imagen: "./assets/homerocerveza.png", cantidad: 0 },
  { id: 2, nombre: "Piscola", imagen: "./assets/piscola.png", cantidad: 0 },
  { id: 3, nombre: "Jugo", imagen: "./assets/jugo.png", cantidad: 0 },
  { id: 4, nombre: "Otros 1", imagen: "./assets/caipiriña.png", cantidad: 0 },
  { id: 5, nombre: "Otros 2", imagen: "./assets/whisky.png", cantidad: 0 },
];

function RegistroBebidas() {
  // Estado que guarda la lista de bebidas y sus cantidades actuales
  const [bebidas, setBebidas] = useState(bebidasIniciales);

  // Función para aumentar la cantidad de una bebida por su id
  const incrementarCantidad = (id) => {
    setBebidas((prevBebidas) =>
      prevBebidas.map((bebida) =>
        bebida.id === id
          ? { ...bebida, cantidad: bebida.cantidad + 1 }
          : bebida
      )
    );
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Registro de Consumo de Bebidas</h2>
      {bebidas.map((bebida) => (
        <div
          key={bebida.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 15,
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <img
            src={bebida.imagen}
            alt={bebida.nombre}
            style={{ width: 60, height: 60, marginRight: 15 }}
          />
          <div style={{ flexGrow: 1 }}>
            <strong>{bebida.nombre}</strong>
            <div>Cantidad: {bebida.cantidad}</div>
          </div>
          <button onClick={() => incrementarCantidad(bebida.id)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default RegistroBebidas;
