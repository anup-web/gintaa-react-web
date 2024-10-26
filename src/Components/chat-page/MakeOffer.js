import React, { Component } from 'react'
import DealsTabs from './DealsTabs';
import { MDBRow, MDBCol } from "mdbreact";
import './Chat.css';




 class MakeOffer extends Component {
    render() {
        return (
            <section className="chat_box">
                 <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <div className="pagination_account">
                                 <i className="fas fa-arrow-left"></i> My Account
                             </div>
                          </div>
                             
                     </div>
                     <div className="row">
                           <div className="tabs_padding col-xl-3">
                                 <DealsTabs />                     
                            </div>
                           
                           <div className="chat_padding col-xl-9">
                               <div className="make_offer">
                                    <h2 className="make_title">Make an offer </h2>

                            <div className="can_get offer_list">                
                            <MDBRow>
                            <MDBCol xl="4">
                                <div className="single-Product p-2">
                                    <div className="product-img">
                                        <img src="assets/images/pro-1.png" className="rounded img-fluid"  alt="pro" />
                                            <div className="img-title">
                                                <h3>Ford ecosport 2012</h3>
                                                <div className="product_des">
                                                    <span className="price">2,50,000</span>
                                                    <span className="location">Saltlake, kol...</span>
                                                </div>
                                            </div>
                                        </div>  
                                        <form>                                        
                                        <div className="form-check custom_chk">
                                            <input className="form-check-input" type="checkbox" value="" checked />
                                            <label className="form-check-label" >Select item</label>
                                        </div>
                                       </form>                                  
                                                                    
                                </div>
                            </MDBCol>
                            <MDBCol xl="4">
                            <div className="single-Product p-2">
                                    <div className="product-img">
                                        <img src="assets/images/pro-1.png" className="rounded img-fluid"  alt="pro" />
                                            <div className="img-title">
                                                <h3>Ford ecosport 2012</h3>
                                                <div className="product_des">
                                                    <span className="price">2,50,000</span>
                                                    <span className="location">Saltlake, kol...</span>
                                                </div>
                                            </div>
                                        </div>  
                                        <form>                                        
                                        <div className="form-check custom_chk">
                                            <input className="form-check-input" type="checkbox" value="" />
                                            <label className="form-check-label" >Select item</label>
                                        </div>
                                       </form>                              
                                </div>
                            </MDBCol>                              
                            </MDBRow>        
                        </div>

                                <form className="offer_any">                                        
                                    <div className="input_any">
                                      <input type="text" className="form_control" placeholder="Do you want to offer anything more?" />
                                    </div>  
                                    <div className="thing_custom">
                                        <button className="btnany" type="button" >Send Offer</button>
                                    </div> 
                                    <div className="form-check make_chk">
                                            <input className="form-check-input" type="checkbox" value="" />
                                            <label className="form-check-label" >I agree to our Terms, Data Policy and Cookie Policy. </label>
                                    </div>          
                                </form> 

                               </div>
                           </div>
                     </div>
                 </div>                 
            </section>
        )
    }
}

export default MakeOffer;