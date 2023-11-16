import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeContext } from "../context/personajeContext";

const MasInfo = () => {
  const { id } = useParams();
  const { Personajes, setSelectedPersonaje, setPersonajes,Favoritos,setFavoritos } =useContext(PersonajeContext);
  const [personaje, setPersonaje] = useState(null);
  const [mensaje, setMensaje] = useState("Agregar a favoritos");
  const[fav,setFav]=useState(false)

  useEffect(() => {
    
    let infoP = Personajes.find((personaje) => personaje.id === parseInt(id));

    if (infoP) {
      setPersonaje(infoP);
      setFav(infoP.favorito)
    } else {
      // Handle the case where no personaje is found with the given id
      console.error(`No personaje found with id: ${id}`);
    }
  }, [Personajes, id,mensaje]);

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

      setMensaje(listaPersonajes[index].favorito ? "Quitar de favoritos" : "Agregar a favoritos");  
    }

    console.log(Personajes);
  };

  return (
    <>
      <section>
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            MasInfo
          </h2>

          <div class="row justify-content-center">
            <div class="col-sm">
              <h1>{personaje?.titulo}</h1>
            </div>
            <div class="col-sm">
              <button onClick={agregarAFavorito}>{mensaje}</button>
            </div>

            <img
              src={personaje?.imagen}
              alt={personaje?.titulo}
              style={imgStyle}
            />
            <h2>{personaje?.descripcion}</h2>
            <p></p>
            <h3>Fecha de creacion: {personaje?.fecha}</h3>
          </div>
        </div>
      </section>
    </>
  );
};

const imgStyle = {
  height: "400px",
  objectFit: "scale-down",
  border: "1px solid #000",
};

export default MasInfo;
