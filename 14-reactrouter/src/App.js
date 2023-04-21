/* eslint-disable no-lone-blocks */
import './App.css';
import Home from './Componentes/Home';
import About from './Componentes/About';
import {Routes, Route, Link} from 'react-router-dom';
{/*
Routes: componente padre encargado de almacenar todas las rutas
Route: componente que tiene la ruta en si
Link: enlace que el usuario acciona desde la parte visual del sitio
*/}

function App() {
  return (
    <div className="App">

      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
        </nav>
      </header>

      <h1>MENU</h1>
      {/*<Navbar />
      <Cabecera />*/}

      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/*<Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />*/}
      </Routes>

      {/*<Footer />*/}

    </div>
  );
}

export default App;
