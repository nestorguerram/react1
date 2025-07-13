import React, { useState } from "react";
// Importa los estilos CSS externos para dar formato y diseño al componente
import "./RegistroBebidas.css";

// Importa las imágenes desde la carpeta assets para mostrar las bebidas
import cervezaImg from "./assets/homerocerveza.png";
import piscolaImg from "./assets/piscola.png";
import jugoImg from "./assets/jugo.png";
import otros1Img from "./assets/caipiriña.png";
import otros2Img from "./assets/whisky.png";

// Define un arreglo inicial con las bebidas disponibles,
// cada una con un id, nombre, imagen y cantidad inicial en cero
const bebidasIniciales = [
  { id: 1, nombre: "Cerveza", imagen: cervezaImg, cantidad: 0 },
  { id: 2, nombre: "Piscola", imagen: piscolaImg, cantidad: 0 },
  { id: 3, nombre: "Jugo", imagen: jugoImg, cantidad: 0 },
  { id: 4, nombre: "Otros 1", imagen: otros1Img, cantidad: 0 },
  { id: 5, nombre: "Otros 2", imagen: otros2Img, cantidad: 0 },
];

// Componente principal que registra el consumo de bebidas
export default function RegistroBebidas() {
  // Estado que almacena la cantidad consumida de cada bebida
  const [bebidas, setBebidas] = useState(bebidasIniciales);

  // Estado que almacena los precios manuales ingresados para cada bebida
  const [precios, setPrecios] = useState({});

  // Estado booleano para saber si la propina está activada
  const [propinaActiva, setPropinaActiva] = useState(false);

  /**
   * Incrementa la cantidad consumida para la bebida con el id dado
   * @param {number} id - id de la bebida
   */
  const incrementarCantidad = (id) => {
    // Actualiza el estado bebidas incrementando la cantidad solo de la bebida indicada
    setBebidas((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, cantidad: b.cantidad + 1 } : b
      )
    );
  };

  /**
   * Decrementa la cantidad consumida para la bebida con el id dado,
   * sin permitir que la cantidad baje de cero
   * @param {number} id - id de la bebida
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
   * Actualiza el precio manual ingresado para la bebida con el id dado
   * @param {number} id - id de la bebida
   * @param {string} valor - valor ingresado en el input (string)
   */
  const manejarPrecioChange = (id, valor) => {
    const precio = parseFloat(valor); // convierte a número decimal
    // Actualiza el estado precios para la bebida específica
    setPrecios((prev) => ({
      ...prev,
      [id]: isNaN(precio) ? 0 : precio, // si no es número pone 0
    }));
  };

  /**
   * Reinicia las cantidades y precios a cero y desactiva la propina
   */
  const resetear = () => {
    // Resetea cantidades de bebidas a 0
    setBebidas((prev) => prev.map((b) => ({ ...b, cantidad: 0 })));
    // Limpia precios
    setPrecios({});
    // Desactiva propina
    setPropinaActiva(false);
  };

  // Calcula el total de tragos consumidos sumando todas las cantidades
  const totalTragos = bebidas.reduce((sum, b) => sum + b.cantidad, 0);

  // Calcula el total a pagar sin incluir la propina
  const totalPagar = bebidas.reduce(
    (sum, b) => sum + b.cantidad * (precios[b.id] || 0),
    0
  );

  // Calcula el total final, aplicando el 10% de propina si está activada
  const totalFinal = propinaActiva ? totalPagar * 1.1 : totalPagar;

  // Retorna el JSX que renderiza la UI
  return (
    <>
      {/* Título principal centrado */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "white",
        }}
      >
        APP Calcula Tú Consumo
      </h1>

      {/* Contenedor principal con estilo de columnas */}
      <div className="contenedor">
        {/* Columna izquierda con el listado de bebidas */}
        <div className="columnaIzquierda">
          <h3>Registro de Consumo de Bebidas</h3>

          {/* Mapea las bebidas para mostrar imagen, nombre, cantidad y botones */}
          {bebidas.map((bebida) => (
            <div key={bebida.id} className="bebidaItem">
              {/* Imagen de la bebida */}
              <img
                src={bebida.imagen}
                alt={bebida.nombre}
                className="bebidaImagen"
              />

              {/* Información de la bebida: nombre y cantidad */}
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

        {/* Columna derecha con inputs para ingresar precios y totales */}
        <div className="columnaDerecha">
          <h3>Ingrese el precio de cada bebida:</h3>

          {/* Mapea bebidas para mostrar inputs de precio */}
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

          {/* Checkbox para activar o desactivar la propina */}
          <div className="propina">
            <label style={{ color: "white", fontWeight: "bold" }}>
              <input
                type="checkbox"
                checked={propinaActiva}
                onChange={() => setPropinaActiva(!propinaActiva)}
              />
              Agregar propina del 10%
            </label>
          </div>

          {/* Línea separadora */}
          <hr />

          {/* Muestra totales: total tragos y total a pagar */}
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

          {/* Contenedor flex para centrar el botón reset */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="botonReset" onClick={resetear}>
              Reiniciar consumo y precios
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
