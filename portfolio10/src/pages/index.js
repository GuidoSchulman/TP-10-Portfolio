import React from 'react'
import Contact from '../components/contact'
import Destacado from '../components/Destacado'


function Index(props) {
  return (<>

    <body id="page-top">
        
        
      
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
       
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
               
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Destacados</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                 
                <div class="row justify-content-center">
                    <Destacado></Destacado>
                    </div>
            </div>
        </section>

       
   
         
      
        
       
    </body>


  </>

  )
}

Index.propTypes = {}

export default Index
