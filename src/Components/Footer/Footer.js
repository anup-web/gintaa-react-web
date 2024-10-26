// eslint-disable-next-line
import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
         <section className="footer">
           <div className="footer-top">
           <MDBContainer>
                <MDBRow>                  
                  <MDBCol xl="8">
                      <h5 className="title">About Us</h5>
                      <p className="footer_text">
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took. Lorem Ipsum is simply dummy text of the printing
                     and typesetting  industry. Lorem Ipsum has been the industry's standard dummy 
                      text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply 
                    dummy text of the printing and typesetting industry.
                    </p>

                    <div className="read_more"> <Link to="/#">Read More</Link> </div>
                    
                    <div className="footer_nav">                    
                      <ul className="nav">
                        <li className="nav-item"> <Link to="/about">About Gintaa </Link>/ </li>
                        <li className="nav-item"> <Link to="/about">Why Gintaa </Link> /</li>
                        <li className="nav-item"> <Link to="/about">How it Works</Link>/ </li>   
                        <li className="nav-item"> <Link to="/about">Faq</Link> </li>                   
                      </ul>                      
                    </div>
                    
                  </MDBCol>
                  <MDBCol xl="4">
                      <h4 className="support_mail">Mail Us : <span>support@gintaa.com</span></h4>

                      <div className="social_link">                    
                      <ul className="nav d-flex justify-content-center">
                        <li className="nav-item"> <Link to="/#"><i className="fab fa-facebook-square"></i></Link> </li>
                        <li className="nav-item"> <Link to="/#"><i className="fab fa-instagram"></i></Link> </li>
                        <li className="nav-item"> <Link to="/#"><i className="fab fa-youtube-square"></i></Link> </li>   
                        <li className="nav-item"> <Link to="/#"><i className="fab fa-twitter-square"></i></Link> </li>  
                        <li className="nav-item"> <Link to="/#"><i className="fab fa-pinterest-square"></i></Link> </li>                 
                      </ul>                      
                      </div>


                      <div className="app_link">
                      <ul className="nav d-flex justify-content-center">
                      <li className="nav-item"><Link to="/#"><img src="assets/images/app-store.png" alt="images" /></Link></li>
                      <li className="nav-item"><Link to="/#"><img src="assets/images/google-play.png" alt="images" /></Link></li>
                      </ul>
                      </div>

                  </MDBCol>
                 
                </MDBRow>
           </MDBContainer>
           </div>
           
           <MDBContainer>
             <MDBRow>
               <MDBCol xl="12">
                 <hr />
               </MDBCol>
             </MDBRow>
           </MDBContainer>



           <div className="footer_bottom">
             <MDBContainer>
               <MDBRow>
                 <MDBCol xl="6">
                   <div className="footer_logo"><img src="assets/images/footer-logo.png" alt="images" /></div>
                   <p className="copy_right">&copy; 2019 Gintaa. All rights reserved. Powered by Asconsoftech</p>
                   </MDBCol>
                 <MDBCol xl="6">
                 <div className="footer_nav copy_nav">
                      <ul className="nav">
                        <li className="nav-item"> <Link to="/#">Site Map </Link> /</li>
                        <li className="nav-item"> <Link to="/#">Help</Link> /</li>
                        <li className="nav-item"> <Link to="/#">Legal & Privacy information </Link> </li>                                           
                      </ul>
                    </div>   
                 </MDBCol>
               </MDBRow>
             </MDBContainer>
           </div>

         </section>
  );
}


export default Footer;


