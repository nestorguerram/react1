import React, { useState } from "react";
// Importa los estilos CSS
import "./RegistroBebidas.css";

// Importa las imágenes desde assets
import cervezaImg from "./assets/homerocerveza.png";
import piscolaImg from "./assets/piscola.png";
import jugoImg from "./assets/jugo.png";
import otros1Img from "./assets/caipiriña.png";
import otros2Img from "./assets/whisky.png";

// Array inicial con las bebidas, imágenes y cantidad 0
const bebidasIniciales = [
  { id: 1, nombre: "Cerveza", imagen: cervezaImg, cantidad: 0 },
  { id: 2, nombre: "Piscola", imagen: piscolaImg, cantidad: 0 },
  { id: 3, nombre: "Jugo", imagen: jugoImg, cantidad: 0 },
  { id: 4, nombre: "Otros 1", imagen: otros1Img, cantidad: 0 },
  { id: 5, nombre: "Otros 2", imagen: otros2Img, cantidad: 0 },
];

export default function RegistroBebidas() {
  // Estado que almacena las cantidades consumidas
  const [bebidas, setBebidas] = useState(bebidasIniciales);

  // Estado que almacena los precios manuales
  const [precios, setPrecios] = useState({});

  // Estado para controlar si la propina del 10% está activa
  const [propinaActiva, setPropinaActiva] = useState(false);

  // Incrementa la cantidad consumida de la bebida con id dado
  const incrementarCantidad = (id) => {
    setBebidas((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, cantidad: b.cantidad + 1 } : b
      )
    );
  };

  // Decrementa la cantidad consumida, sin bajar de 0
  const decrementarCantidad = (id) => {
    setBebidas((prev) =>
      prev.map((b) =>
        b.id === id
          ? { ...b, cantidad: b.cantidad > 0 ? b.cantidad - 1 : 0 }
          : b
      )
    );
  };

  // Maneja el cambio de precio ingresado para una bebida
  const manejarPrecioChange = (id, valor) => {
    const precio = parseFloat(valor);
    setPrecios((prev) => ({
      ...prev,
      [id]: isNaN(precio) ? 0 : precio,
    }));
  };

  // Resetea cantidades, precios y desactiva propina
  const resetear = () => {
    setBebidas((prev) => prev.map((b) => ({ ...b, cantidad: 0 })));
    setPrecios({});
    setPropinaActiva(false);
  };

  // Calcula el total de tragos consumidos
  const totalTragos = bebidas.reduce((sum, b) => sum + b.cantidad, 0);

  // Calcula el total sin propina
  const totalPagar = bebidas.reduce(
    (sum, b) => sum + b.cantidad * (precios[b.id] || 0),
    0
  );

  // Calcula el total con propina si está activada
  const totalFinal = propinaActiva ? totalPagar * 1.1 : totalPagar;

  return (
    <div className="contenedor">
      {/* Columna izquierda con listado de bebidas y controles */}
      <div className="columnaIzquierda">
        <h3>Registro de Consumo de Bebidas</h3>

        {/* Mapeo para mostrar cada bebida con imagen, nombre, cantidad y botones */}
        {bebidas.map((bebida) => (
          <div key={bebida.id} className="bebidaItem">
            <img
              src={bebida.imagen}
              alt={bebida.nombre}
              className="bebidaImagen"
            />
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

      {/* Columna derecha con inputs para precios, propina y totales */}
      <div className="columnaDerecha">
        <h3>Ingrese el precio de cada bebida:</h3>

        {/* Inputs para que el usuario ingrese precio por bebida */}
        {bebidas.map((bebida) => (
          <div key={bebida.id} className="precioItem">
            <label htmlFor={`precio-${bebida.id}`} className="precioLabel">
              {bebida.nombre}:
            </label>
            <input
              type="number"
              id={`precio-${bebida.id}`}
              min="0"
              step="0.01"
              value={precios[bebida.id] || ""}
              onChange={(e) => manejarPrecioChange(bebida.id, e.target.value)}
              className="precioInput"
              placeholder="Ingrese solo números Ej: 1500"
            />
          </div>
        ))}

        {/* Checkbox para activar o desactivar la propina del 10% */}
        <div className="propina">
          <label>
            <input
              type="checkbox"
              checked={propinaActiva}
              onChange={() => setPropinaActiva(!propinaActiva)}
            />
            Agregar propina del 10%
          </label>
        </div>

        <hr />

        {/* Totales: cantidad total y valor total a pagar */}
        <div className="totales">
          <div>
            <strong>Total de tragos consumidos:</strong> {totalTragos}
          </div>
          <div>
            <strong>
              Total a pagar{propinaActiva ? " (con propina)" : ""}:
            </strong>{" "}
            {new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(totalFinal)}
          </div>
        </div>

        {/* Contenedor flex para centrar el botón */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="botonReset" onClick={resetear}>
            Reiniciar consumo y precios
          </button>
        </div>
      </div>
    </div>
  );
}
