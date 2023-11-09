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

  
  return (
    <div className="row">
      {Personajes.map((personaje, index) => (
        <div className="col-md-4 mb-5" key={index}>
          <div
            className="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal1"
          >
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
              <div className="portfolio-item-caption-content text-center text-white">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid"
              src={personaje.imagen}
              alt={personaje.titulo}
              style={imgStyle} // Apply inline styles here
            />
          </div>
        </div>
      ))}
    </div>
  );
}
const imgStyle = {
  height: "350px", // Set the fixed height for all images
  objectFit: "cover", // Ensure the image covers the specified height without stretching
};
