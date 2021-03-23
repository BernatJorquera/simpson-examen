import { useContext, useState } from "react";
import PersonajesContext from "../contextos/PersonajesContext";

const Formulario = () => {
  const { personajes, setPersonajes } = useContext(PersonajesContext);
  const [nombreInput, setNombreInput] = useState("");
  const [apellidoInput, setApellidoInput] = useState("");
  const [edadInput, setEdadInput] = useState("");
  const creaPersonaje = async e => {
    e.preventDefault();
    const nombresPersonajes = personajes.map(personaje => personaje.nombre);
    const apellidosPersonajes = personajes.map(personaje => personaje.apellido);
    const url = `http://api.giphy.com/v1/gifs/random?api_key=Oij4PeYnq4qiV5RVWIjaKfWaMt5IecSt&tag=${encodeURI(`${nombreInput} ${apellidoInput}`)}`;
    const resp = await fetch(url);
    const datos = await resp.json();
    if (!nombresPersonajes.includes(nombreInput) || !apellidosPersonajes.includes(apellidoInput)) {
      const personajeNuevo = {
        nombre: nombreInput,
        apellido: apellidoInput,
        edad: edadInput,
        gif: datos.data.length > 0 ? datos.data.images.original.url : "img/nubes.jpg"
      };
      setPersonajes(personajes ? [...personajes, personajeNuevo] : [personajeNuevo]);
    }
  };
  const modificarValue = (event, accion) => {
    if (accion === "nombre") {
      setNombreInput(event.target.value);
    } else if (accion === "apellido") {
      setApellidoInput(event.target.value);
    } else if (accion === "edad") {
      setEdadInput(event.target.value);
    }
  };
  return (
    <section className="crear-personaje row">
      <form className="col" onSubmit={creaPersonaje}>
        <div className="form-group row align-items-center">
          <label htmlFor="nombre" className="col-1">Nombre: </label>
          <input value={nombreInput} type="text" className="form-control col-4" id="nombre" onChange={(e) => modificarValue(e, "nombre")} />
          <label htmlFor="apellido" className="col-1" >Apellido: </label>
          <input value={apellidoInput} type="text" className="form-control col" id="apellido" onChange={(e) => modificarValue(e, "apellido")} />
        </div>
        <div className="form-group row align-items-center">
          <label htmlFor="edad" className="col-1">Edad: </label>
          <select value={edadInput} id="edad" className="form-control col-4" onChange={(e) => modificarValue(e, "edad")}>
            <option value="">Selecciona edad</option>
            <option value="menos de 5 años">menos de 5 años</option>
            <option value="menos de 10 años">menos de 10 años</option>
            <option value="menos de 20 años">menos de 20 años</option>
            <option value="menos de 40 años">menos de 40 años</option>
            <option value="menos de 60 años">menos de 60 años</option>
            <option value="menos de 80 años">menos de 80 años</option>
            <option value="menos de 100 años">menos de 100 años</option>
            <option value="menos de 110 años">menos de 110 años</option>
          </select>
          <button className="btn btn-info col" type="submit">Añadir personaje</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
