import React from 'react'
const Footer = () => {
    return(

        <footer class="font-small w-100" style={{backgroundColor:"#011827"}}>
        
          <div class="container">

            <hr class="rgba-white-light" style={{margin:"0 15%"}}></hr>
        
            <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
        
              <div class="col-md-8 col-12 mt-5 text-white">
                <p style={{lineHeight: "1.7rem"}}>
                A volunteer effort.</p>
              </div>
        
            </div>
            <hr class="clearfix" style={{margin: "10% 15% 5%;",borderColor:"white",width:"70%"}}></hr>
        
            <div class="row pb-1">
        
              <div class="col-md-12 p-0">
        
                <div class="mb-3 text-center justify-content-center">
        
                  <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg text-white mr-4"> </i>
                  </a>
                  <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg text-white mr-4"> </i>
                  </a>
                  <a class="li-ic">
                    <i class="fab fa-linkedin-in fa-lg text-white mr-4"> </i>
                  </a>
                  <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg text-white mr-4"> </i>
                  </a>
        
                </div>
        
              </div>
        
            </div>
        
          </div>
          <div class=" text-center py-1 text-white">
            Contact Us -<a class="text-white" href="tel:9878787121"> 9878787121</a>
          </div>
          <div class="footer-copyright text-center py-1 text-white">© 2021 Copyright:
            <a href="/"> Covid App</a>
          </div>
        
        </footer>


    )
}

export default Footer
