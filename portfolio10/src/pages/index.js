import React from 'react'
import Contact from '../components/contact'
import Destacado from '../components/item'


function Index(props) {
  return (<>

    <body id="page-top">
        
        
      
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
           
                <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
              
                <h1 class="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
             
                <p class="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
       
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
               
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                
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
      <Contact></Contact>
        
       
   
         
      
        
       
    </body>


  </>

  )
}

Index.propTypes = {}

export default Index
