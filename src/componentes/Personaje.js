import { useContext } from "react";
import PersonajesContext from "../contextos/PersonajesContext";

const Personaje = () => {
  const { personajes } = useContext(PersonajesContext);
  return (
    <>
      {
        personajes && personajes.map(personaje =>
          <tr key={`${personaje.nombre}${personaje.apellido}`} className="personaje">
            <td>{personaje.nombre} {personaje.apellido}</td>
            <td>{personaje.edad}</td>
            <td><img className="gif" src={`${personaje.gif}`} alt={`${personaje.nombre} ${personaje.apellido}`} /></td>
          </tr>)
      }
    </>
  );
};

export default Personaje;
