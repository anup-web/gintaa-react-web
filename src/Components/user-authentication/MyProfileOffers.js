import React, { Component, Fragment } from 'react'
import { MDBRow, MDBCol } from 'mdbreact';
import { Link } from "react-router-dom";

 class MyProfileOffers extends Component {
    render() {
        return (
            <Fragment>
            <div className="offers_title">
                <h2>My offers</h2>                
            </div>
            <MDBRow className="can_get">
                <MDBCol xl="4">
                <div className="single-Product">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="images" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div> 
                </MDBCol>

                <MDBCol xl="4">
                <div className="single-Product">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="images" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div> 
                </MDBCol>

                <MDBCol xl="4">
                <div className="single-Product">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="images" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div> 
                </MDBCol>

                <MDBCol xl="4">
                <div className="single-Product">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="images" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div> 
                </MDBCol>

                <MDBCol xl="4">
                <div className="single-Product">
                            <div className="product-img">
                            <img src="assets/images/product-img.png" className="rounded img-fluid"  alt="images" />
                                <div className="img-title">
                                    <h3>Ford ecosport 2012</h3>
                                    <div className="product_des">
                                         <span className="price">2,50,000</span>
                                         <span className="location">Saltlake, kol...</span>
                                    </div>
                                </div>
                            </div>                            
                            </div> 
                </MDBCol>

            </MDBRow>
            <MDBRow>
                <MDBCol xl="12" sm="12" className="mb-4">
                    <div className="new_offer"> <Link to="/new-offer">Add new offer</Link>  </div>                        
                </MDBCol>
            </MDBRow>
            </Fragment>
        )
    }
}
export default MyProfileOffers;