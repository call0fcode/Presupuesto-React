import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import Error from "./Error";

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarMostrarPregunta }) => {

  // Definición de states

  // State del presupuesto
  const [ cantidad, guardarCantidad ] = useState(0);

  // State de error de validación
  const [ error, guardarError ] = useState(false);

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value) );
  }

  // Función para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar
    if ( cantidad < 1 || isNaN( cantidad ) ) {
      guardarError(true);
      return;
    }

    // Procedimientos a realizar si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarMostrarPregunta(false);
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      { error ? <Error mensaje = 'El presupuesto es incorrecto' /> : null }

      <form
        onSubmit = { agregarPresupuesto }
      >
        <input
          type = 'number'
          className = 'u-full-width'
          placeholder = 'Coloca tu presupuesto'
          onChange = { definirPresupuesto }
        />

        <input
          type = 'submit'
          className = 'button-primary u-full-width'
          value = 'Definir presupuesto'
        />
      </form>
    </Fragment>
  )
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;
