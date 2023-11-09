import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PersonajeContext } from "../context/personajeContext"



const MasInfo = () => {
    const {id} = useParams();
    const { Personajes, setSelectedPersonaje } = useContext(PersonajeContext)  
    const [personaje,setPersonaje] = useState(null);

    

    useEffect(()=>{
        let infoP = Personajes.find((personaje) => personaje.id == id);
        console.log(infoP)
        setPersonaje(infoP)
    },[Personajes])

    console.log('infop',personaje)
    return (

        <><section >
        <div class="container">
           
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">MasInfo</h2>
           
           
             
            <div class="row justify-content-center">
            <h1>{personaje?.titulo}</h1>
            <img
              className="img-fluid"
              src={personaje?.imagen}
              alt={personaje?.titulo}
                          
            
            /> 
                </div>
        </div>
    </section>
        
        

          
        </>
    )
}

export default MasInfo
