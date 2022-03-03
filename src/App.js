import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definición de states
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarMostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (creargasto) {

      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Reset a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          {
            mostrarpregunta ?
            (
              <Pregunta
                guardarPresupuesto = {guardarPresupuesto}
                guardarRestante = {guardarRestante}
                actualizarMostrarPregunta = {actualizarMostrarPregunta}
              />
            ) :
            (
              <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto = {guardarGasto}
                    guardarCrearGasto = {guardarCrearGasto}

                  />
                </div>
                <div className='one-half column'>
                  <Listado
                    gastos = {gastos}
                  />
                  <ControlPresupuesto
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
              </div>
          </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;