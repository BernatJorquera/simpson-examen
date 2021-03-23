import Personaje from "./Personaje";
import TotalPersonajes from "./TotalPersonajes";

const ListadoPersonajes = () => {
  return (
    <section className="listado">
      <TotalPersonajes />
      <table className="personajes table table-bordered">
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Edad aprox.</th>
            <th>Gif</th>
          </tr>
        </thead>
        <tbody>
          <Personaje />
        </tbody>
      </table>
    </section>
  );
};

export default ListadoPersonajes;
