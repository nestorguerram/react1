import React, { useState } from "react";
// Importa el CSS que has definido con estilos para el componente
import "./RegistroBebidas.css";

// Importa imágenes locales desde src/assets
import cervezaImg from "./assets/homerocerveza.png";
import piscolaImg from "./assets/piscola.png";
import jugoImg from "./assets/jugo.png";
import otros1Img from "./assets/caipiriña.png";
import otros2Img from "./assets/whisky.png";

// Definición inicial de bebidas con sus imágenes y cantidades en 0
const bebidasIniciales = [
  { id: 1, nombre: "Cerveza", imagen: cervezaImg, cantidad: 0 },
  { id: 2, nombre: "Piscola", imagen: piscolaImg, cantidad: 0 },
  { id: 3, nombre: "Jugo", imagen: jugoImg, cantidad: 0 },
  { id: 4, nombre: "Otros 1", imagen: otros1Img, cantidad: 0 },
  { id: 5, nombre: "Otros 2", imagen: otros2Img, cantidad: 0 },
];

export default function RegistroBebidas() {
  // Estado para cantidades consumidas de bebidas
  const [bebidas, setBebidas] = useState(bebidasIniciales);

  // Estado para precios ingresados manualmente por bebida (objeto id->precio)
  const [precios, setPrecios] = useState({});

  /**
   * Incrementa la cantidad consumida de la bebida con el id dado
   * @param {number} id - id de la bebida a incrementar
   */
  const incrementarCantidad = (id) => {
    setBebidas((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, cantidad: b.cantidad + 1 } : b
      )
    );
  };

  /**
   * Decrementa la cantidad consumida, pero nunca menos de cero
   * @param {number} id - id de la bebida a decrementar
   */
  const decrementarCantidad = (id) => {
    setBebidas((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, cantidad: b.cantidad > 0 ? b.cantidad - 1 : 0 }
          : b
      )
    );
  };

  /**
   * Actualiza el precio de la bebida con el id dado según el input
   * @param {number} id - id de la bebida
   * @param {string} valor - valor ingresado en el input (string)
   */
  const manejarPrecioChange = (id, valor) => {
    const precio = parseFloat(valor);
    setPrecios((prev) => ({
      ...prev,
      [id]: isNaN(precio) ? 0 : precio,
    }));
  };

  /**
   * Resetea todas las cantidades a 0 y limpia todos los precios
   */
  const resetear = () => {
    setBebidas((prev) => prev.map((b) => ({ ...b, cantidad: 0 })));
    setPrecios({});
  };

  // Total de tragos consumidos sumando cantidades de todas las bebidas
  const totalTragos = bebidas.reduce((sum, b) => sum + b.cantidad, 0);

  // Total a pagar: suma de (cantidad * precio) para cada bebida
  const totalPagar = bebidas.reduce(
    (sum, b) => sum + b.cantidad * (precios[b.id] || 0),
    0
  );

  return (
    <div className="contenedor">
      {/* Columna izquierda: listado de bebidas */}
      <div className="columnaIzquierda">
        <h3>Registro de Consumo de Bebidas</h3>

        {bebidas.map((bebida) => (
          <div key={bebida.id} className="bebidaItem">
            {/* Imagen de la bebida */}
            <img
              src={bebida.imagen}
              alt={bebida.nombre}
              className="bebidaImagen"
            />

            {/* Información: nombre y cantidad consumida */}
            <div className="bebidaInfo">
              <strong>{bebida.nombre}</strong>
              <div>Cantidad: {bebida.cantidad}</div>
            </div>

            {/* Botón para restar cantidad */}
            <button
              className="boton-restar"
              onClick={() => decrementarCantidad(bebida.id)}
              aria-label={`Restar uno a ${bebida.nombre}`}
            >
              -
            </button>

            {/* Botón para sumar cantidad */}
            <button
              className="botonIncrementar"
              onClick={() => incrementarCantidad(bebida.id)}
              aria-label={`Sumar uno a ${bebida.nombre}`}
            >
              +
            </button>
          </div>
        ))}
      </div>

      {/* Columna derecha: inputs para precios y resumen */}
      <div className="columnaDerecha">
        <h3>Ingrese el precio de cada bebida:</h3>

        {bebidas.map((bebida) => (
          <div key={bebida.id} className="precioItem">
            <label htmlFor={`precio-${bebida.id}`} className="precioLabel">
              {bebida.nombre}:
            </label>
            <input
              type="number"
              id={`precio-${bebida.id}`}
              min="0"
              /*step="0.01"*/
              value={precios[bebida.id] || ""}
              onChange={(e) => manejarPrecioChange(bebida.id, e.target.value)}
              className="precioInput"
              placeholder="Solo el valor, sin simbolo $ 1500"
            />
          </div>
        ))}

        <hr />

        <div className="totales">
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
        </div>

        <button className="botonReset" onClick={resetear}>
          Reiniciar consumo y precios
        </button>
      </div>
    </div>
  );
}
