import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeContext } from "../context/personajeContext";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const MasInfo = () => {
  const { id } = useParams();
  const { Personajes, setPersonajes, Favoritos, setFavoritos } = useContext(PersonajeContext);
  const [personaje, setPersonaje] = useState(null);
  const [mensaje, setMensaje] = useState("Agregar a favoritos");
  const [fav, setFav] = useState(false);
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    let infoP = Personajes.find((personaje) => personaje.id === parseInt(id));

    if (infoP) {
      setPersonaje(infoP);
      setFav(infoP.favorito);
      setMensaje(infoP.favorito ? "Quitar de favoritos" : "Agregar a favoritos");
    } else {
      // Handle the case where no personaje is found with the given id
      console.error(`No personaje found with id: ${id}`);
    }
  }, [Personajes, id]);

  const agregarAFavorito = () => {
    let listaPersonajes = [...Personajes];
    let listaFavoritos = [...Favoritos];

    const index = listaPersonajes.findIndex(
      (personaje) => personaje.id === parseInt(id)
    );

    if (index !== -1) {
      listaPersonajes[index].favorito = !listaPersonajes[index].favorito;

      if (listaPersonajes[index].favorito) {
        listaFavoritos.push(listaPersonajes[index]);
      } else {
        const favIndex = listaFavoritos.findIndex(
          (favPersonaje) => favPersonaje.id === parseInt(id)
        );
        if (favIndex !== -1) {
          listaFavoritos.splice(favIndex, 1);
        }
      }

      setPersonajes(listaPersonajes);
      setFavoritos(listaFavoritos);

      setMensaje(listaPersonajes[index].favorito ? " Quitar de favoritos" : " Agregar a favoritos");
    }

    console.log(Personajes);
  };

  return (
    <>
      <section className="mas-info-section">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4">
            {personaje?.titulo}
          </h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={personaje?.imagen}
                alt={personaje?.titulo}
                style={imgStyle}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mb-4">
              <h3>Descripción:</h3>
              <p>{personaje?.descripcion}</p>
              <h4>Fecha de creación: {personaje?.fecha}</h4>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <button onClick={agregarAFavorito} className="btn btn-primary">
                {fav ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                {mensaje}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const imgStyle = {
  height: "400px",
  objectFit: "cover",
  border: "1px solid #000",
};

export default MasInfo;
