import { useContext } from "react";
import { PersonajeContext } from "../context/personajeContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { Favoritos } = useContext(PersonajeContext);

  return (
    <div className="favorites-container">
      <h2 className="text-center mb-4">Favorites</h2>
      <div className="row">
        {Favoritos?.map((favPersonaje, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div className="card">
              <Link to={"/masInfo/" + favPersonaje.id} className="card-link">
                <img
                  className="card-img-top"
                  src={favPersonaje.imagen}
                  alt={favPersonaje.titulo}
                  style={imgStyle}
                  onMouseOver={(e) => (e.target.style.filter = "brightness(120%)")}
                  onMouseOut={(e) => (e.target.style.filter = "brightness(50%)")}
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{favPersonaje.titulo}</h5>
                  <p className="card-text">{favPersonaje.descripcion}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Fecha de creacion: {favPersonaje.fecha}
                    </small>
                  </p>
                </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const imgStyle = {
  height: "300px", // Adjust the height as needed
  objectFit: "cover",
  border: "1px solid #000",
};

export default Favorites;
