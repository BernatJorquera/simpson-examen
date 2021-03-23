import { useState } from "react";
import Formulario from "./componentes/Formulario";
import ListadoPersonajes from "./componentes/ListadoPersonajes";
import PersonajesContext from "./contextos/PersonajesContext";

function App() {
  const [personajes, setPersonajes] = useState([]);
  return (
    <>
      <div className="container">
        <PersonajesContext.Provider value={{ personajes, setPersonajes }}>
          <header className="cabecera row">
            <h1 className="col">Personajes de Los Simpsons</h1>
          </header>
          <Formulario />
          <ListadoPersonajes />
        </PersonajesContext.Provider>
      </div>
    </>
  );
}

export default App;
