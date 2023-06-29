import './App.css';
import ComponenteUno from './componentes/ComponenteUno';

function App() {
  return (
   
    <Routes>
      <Route path="/Home" element={<ComponenteUno />} />
      

    </Routes>
  );
}

export default App;
