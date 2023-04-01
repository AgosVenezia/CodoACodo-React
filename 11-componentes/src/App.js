import './App.css';
import Usuarios from './componentes/Usuarios';

{/* ATAJO: rcf */}

function App() {
  return (
    <div className="App">

      <p className="mt-5 text-center">Probando</p>
      
      {/* Ambas opciones llaman al componente
      Como cualquier tag, me permiten poner algo adentro
      <Usuarios>

      </Usuarios>
      
      Con esta opción se pueden agregar los props antes de la barra lateral en la misma línea
      <Usuarios />*/}

      <Usuarios nombre="Juan Carlos" edad="50" />
      <Usuarios nombre="Maria" />
      <Usuarios nombre="No sé" edad="500" localidad="Ramos Mejía" />

    </div>
  );
}

export default App;
