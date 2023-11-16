import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonajeContext } from "../context/personajeContext";

const Favorites = () => {
 const{personajes,favoritos} = useContext(PersonajeContext)

 useEffect(()=>{



 })
  return (
    <>
    
    </>
  );
};

const imgStyle = {
  height: "400px",
  objectFit: "scale-down",
  border: "1px solid #000",
};

export default Favorites;
