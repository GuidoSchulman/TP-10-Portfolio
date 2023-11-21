import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeContext } from "../context/personajeContext";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MasInfo = () => {
  const { id } = useParams();
  const { Personajes, existeFavorito,agregarAFavorito,quitarFavorito } = useContext(PersonajeContext);
  const [personaje, setPersonaje] = useState(null);  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const filtro = Personajes.filter(x=>x.id==id);
    if (filtro.length>0) {
      setPersonaje(filtro[0]);      
    } else {
      console.error(`No personaje found with id: ${id}`);
    }
  }, [Personajes, existeFavorito, id]);

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
              <button onClick={existeFavorito(id) ? ()=>quitarFavorito(personaje.id) : ()=>agregarAFavorito(personaje)} className="btn btn-primary">
                {existeFavorito(id) ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
                {existeFavorito(id) ? " Quitar de favoritos" : " Agregar a favoritos"}
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
