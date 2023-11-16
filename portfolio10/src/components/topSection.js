import { Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import { useContext, useEffect, useState } from "react";
import { PersonajeContext } from "../context/personajeContext";
export default function TopSection(){
   
    return(
<>
 <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
           
               
              
                <h1 class="masthead-heading text-uppercase mb-0">PORTFOLIO</h1>
          
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
             
                <p class="masthead-subheading font-weight-light mb-0">GUIDO SCHULMAN & BAUTISTA LARRAIN</p>
            </div>
        </header>
</>
    )


}