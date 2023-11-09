import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Item() {
  const [Personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get("/Personajes.json")
      .then(function (response) {
        setPersonajes(response.data.Personajes.slice(0, 6)); // Show only the first 6 items
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const info = (idP) => {
    let infoP = Personajes.find((personaje) => personaje.id === idP);
    console.log(infoP);
  };

  return (
    <div className="row">
    {Personajes.map((personaje, index) => (
      <div className="col-md-4 mb-5" key={index}>
        <div className="portfolio-item mx-auto">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            className="img-fluid"
            src={personaje.imagen}
            alt={personaje.titulo}
            style={imgStyle}
            onClick={() => info(personaje.id)}
            onMouseOver={(e) => (e.target.style.filter = "brightness(120%)")} // Change brightness on hover
            onMouseOut={(e) => (e.target.style.filter = "brightness(50%)")} // Reset brightness on mouse leave
          />
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
