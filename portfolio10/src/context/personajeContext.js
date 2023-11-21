import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PersonajeContext = createContext();

const PersonajeProvider = (props) => {
  const PersonajesFavoritos = localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos"))
    : [];

  const [Personajes, setPersonajes] = useState([]);
  const [Favoritos, setFavoritos] = useState(PersonajesFavoritos);

  useEffect(() => {
    axios
      .get("/Personajes.json")
      .then(function (response) {
        setPersonajes(response.data.Personajes); // Show only the first 6 items
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(Favoritos));
  }, [Favoritos]);

  const existeFavorito = (id) => {    
    const filtro = Favoritos.filter((x) => x.id == id);
    return filtro.length > 0;
  };

  const agregarAFavorito = (personaje) => {
    setFavoritos([...Favoritos, personaje]);
  };

  const quitarFavorito = (id) => {
    const filtro = Favoritos.filter((x) => x.id !== id);
    setFavoritos(filtro);
  };

  return (
    <PersonajeContext.Provider
      value={{
        Personajes,
        setPersonajes,
        Favoritos,
        existeFavorito,
        agregarAFavorito,
        quitarFavorito,
      }}
    >
      {props.children}
    </PersonajeContext.Provider>
  );
};

export default PersonajeProvider;
