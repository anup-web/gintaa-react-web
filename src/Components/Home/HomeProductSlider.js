import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import HomeProslider from './HomeProslider';
import { Link } from "react-router-dom";

 class HomeProductSlider extends Component {
    render() {
        return (
            <section className="product_slider">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="4">
                              <h2 className="can_gets">I Have Ford</h2>
                              <HomeProslider />
                        </MDBCol>
                        <MDBCol xl="8">
                            <h2 className="can_gets">I Can Get</h2>
                            <div className="can_get d-flex flex-row">                            
                                                          
                            <div className="single-Product p-2">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="product img" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div>
                            
                            <div className="single-Product p-2">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="product img" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div>

                            <div className="single-Product p-2">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="product img" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div>

                            <div className="single-Product p-2">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="product img" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div>
                            
                            </div>

                            <div className="more_offers"><Link to="/#">See more offers</Link></div>
                            
                        </MDBCol>
                    </MDBRow>

                    <div className="offer_circle"><Link to="/new-offer"><i class="fas fa-plus"></i></Link></div>
                </MDBContainer>
                
            </section>
        )
    }
}


export default HomeProductSlider;