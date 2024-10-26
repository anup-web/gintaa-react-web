import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Link } from "react-router-dom";

class HomeTrandingItems extends Component {

    render() {
        return (
            <section className="trad_items">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="4">
                               <h1 className="trad_item">Tranding Items</h1>
                               <p className="near">Tranding products near you</p>
                               <div className="see_more"> <Link to="/">See More</Link> </div>
                        </MDBCol>

                        <MDBCol xl="8">
                        <div className="can_get"> 
                        <div className="row">
                            <div className="col-md-6 col-sm-12 co-xs-12 gal-item">                               
                            
                                <div className="row">
                                        <div className="col-md-6 col-sm-6 co-xs-12 gal-item">
                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/pro-2.png" className="img-fluid rounded" alt="pro" />
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

                                        <div className="col-md-6 col-sm-6 co-xs-12 gal-item">
                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/pro-2.png" className="img-fluid rounded" alt="pro" />
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
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12 co-xs-12 gal-item">
                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/card-img-big.png" className="img-fluid rounded" alt="pro" />
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
                                    </div>
                            </div>

                                <div class="col-md-6 col-sm-12 co-xs-12 gal-item">
                                
                            <div className="row">
                                        <div className="col-md-12 col-sm-12 co-xs-12 gal-item">
                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/card-img-big.png" className="img-fluid rounded" alt="pro" />
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
                                    </div>
                                <div className="row">
                                        <div className="col-md-6 col-sm-6 co-xs-12 gal-item">
                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/pro-2.png" className="img-fluid rounded" alt="pro" />
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

                                        <div className="col-md-6 col-sm-6 co-xs-12 gal-item">


                                        <div className="box tranding-Product">
                                            <div className="product-img">
                                            <img src="assets/images/pro-2.png" className="img-fluid rounded" alt="pro" />
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
                                    </div>
                            </div>
                            </div>
                      </div>
                     </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}


export default HomeTrandingItems;
