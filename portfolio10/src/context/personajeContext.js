import axios from 'axios';
import React,{createContext,useEffect,useState} from 'react';

export const PersonajeContext = createContext();

const PersonajeProvider = (props) => {
    const [Personajes, setPersonajes] = useState([]);
    const [selectedPersonaje, setSelectedPersonaje] = useState(null)
    console.log(selectedPersonaje);
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
        <PersonajeContext.Provider
            value={{                
                Personajes,
                setSelectedPersonaje,
                selectedPersonaje,
                setPersonajes
            }}
        >
            {props.children}
        </PersonajeContext.Provider>
    )
}

export default PersonajeProvider;