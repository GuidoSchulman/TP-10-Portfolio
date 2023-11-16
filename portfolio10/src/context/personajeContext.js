import axios from 'axios';
import React,{createContext,useEffect,useState} from 'react';

export const PersonajeContext = createContext();

const PersonajeProvider = (props) => {
    const [Personajes, setPersonajes] = useState([]);
    const [selectedPersonaje, setSelectedPersonaje] = useState(null)
    const [Favoritos, setFavoritos] = useState([]);
    console.log(selectedPersonaje);

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
      
      useEffect(()=>{
        console.log(Favoritos);
      },[Favoritos])

      useEffect(()=>{
       
        localStorage.setItem('favoritos',JSON.stringify(Favoritos))
      },[Favoritos])

    return (
        <PersonajeContext.Provider
            value={{                
                Personajes,
                setSelectedPersonaje,
                selectedPersonaje,
                setPersonajes,
                Favoritos,
                setFavoritos,

            }}
        >
            {props.children}
        </PersonajeContext.Provider>
    )
}

export default PersonajeProvider;