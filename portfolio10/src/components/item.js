import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { PersonajeContext } from "../context/personajeContext";
import { Link } from "react-router-dom";

export default function Item() {
  const { Personajes, setSelectedPersonaje } = useContext(PersonajeContext)  

  return (
    <div className="row">
      {Personajes.map((personaje, index) => (
        <div className="col-md-4 mb-5" key={index}>
          <div className="portfolio-item mx-auto">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <Link to={"/masInfo/"+personaje.id}>
            <img
              className="img-fluid"
              src={personaje.imagen}
              alt={personaje.titulo}
              style={imgStyle}              
              onMouseOver={(e) => (e.target.style.filter = "brightness(120%)")}
              onMouseOut={(e) => (e.target.style.filter = "brightness(50%)")}
            />
          </Link>
        </div>

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
