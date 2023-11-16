import React from 'react'
import Contact from '../components/contact'
import Destacado from '../components/Destacado'
import TopSection from '../components/topSection'

function Index(props) {
  return (<>

    <body id="page-top">
        
        
      
       <TopSection></TopSection>
       
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
