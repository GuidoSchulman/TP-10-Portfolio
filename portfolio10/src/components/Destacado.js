import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PersonajeContext } from "../context/personajeContext";
import { Link } from "react-router-dom";
import ItemPersonaje from "./itemPersonaje";

export default function Destacado() {
  const { Personajes, setSelectedPersonaje } = useContext(PersonajeContext)  
  const limitedPersonajes = Personajes.slice(0, 6);

  return (
    <div className="row">
      {limitedPersonajes.map((personaje, index) => (
        <ItemPersonaje personaje={personaje}index={index}></ItemPersonaje>

     
      ))}
    </div>
  );
}

const imgStyle = {
  height: "400px",
  objectFit: "cover",
  transition: "filter 0.3s ease-in-out",
  filter: "brightness(50%)", // Initial brightness
  cursor: "pointer",
};
