import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";

 class YourMatch extends Component {
    render() {
        return (
            <Fragment>
            <div className="row">  
             <div className="col-md-12"> 
                  <h2 className="your_pottitle">your Potential match</h2>
             </div>
             </div>

            <div className="can_get">            
            <div className="row">  
             <div className="col-md-12 col-sm-12 co-xs-12 gal-item">                    
                <div className="row">
                            <div className="col-md-12 col-sm-12 co-xs-12 gal-item">
                            <div className="box tranding-Product">
                                <div className="product-img">
                                <Link to="/offer-details">
                                <img src="assets/images/card-img-big.png" className="img-fluid rounded" alt="card" />
                                </Link>
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
          </Fragment>
        )
    }
}

export default YourMatch;