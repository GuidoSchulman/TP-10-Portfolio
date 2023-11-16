import { useContext } from "react";
import { PersonajeContext } from "../context/personajeContext";
import { Link } from "react-router-dom";
import ItemPersonaje from "../components/itemPersonaje";

const MisCreaciones = () => {
  const { Personajes } = useContext(PersonajeContext);

  return (
    <div className="mis-creaciones-container text-center">
      <h2 className="mb-4">Mis Creaciones</h2>
      <div className="row justify-content-center">
        {Personajes.map((persona, index) => (
        <ItemPersonaje personaje={persona}index={index}></ItemPersonaje>
        ))}
      </div>
    </div>
  );
};

const imgStyle = {
  height: "300px", // Adjust the height as needed
  objectFit: "cover",
  transition: "filter 0.3s ease-in-out",
  filter: "brightness(50%)", // Initial brightness
  cursor: "pointer",
};

export default MisCreaciones;
