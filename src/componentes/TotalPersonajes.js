import { useContext } from "react";
import PersonajesContext from "../contextos/PersonajesContext";

const TotalPersonajes = () => {
  const { personajes } = useContext(PersonajesContext);
  return (
    <h3 className="total">Hay un total de {personajes.length} personajes</h3>
  );
};

export default TotalPersonajes;
