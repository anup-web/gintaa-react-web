import React, { Component } from 'react'
import DealsTabs from './DealsTabs';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { Link } from "react-router-dom";
import './Chat.css';




 class ChartBrowseImages extends Component {
    render() {
        return (
            <section className="chat_box">
                 <div className="container">
                     <div className="row">
                         <div className="col-12">
                             <div className="pagination_account">
                                 <i class="fas fa-arrow-left"></i> My Account
                             </div>
                          </div>
                             
                     </div>
                     <div className="row">
                           <div className="tabs_padding col-xl-3">
                                 <DealsTabs />                     
                            </div>
                           
                           <div className="chat_padding col-xl-9">
                               <div className="chat_deal">
                                <ChatHeader />  
                               
                                 <div className="browse_upload">                                      
                                     <div className="image_zoom">
                                         <img src="assets/images/browse-1.png" alt="browse" />
                                     </div>

                                <div className="add_image"> 
                                   <h2>Add Images</h2>  
                                   <ul className="add_list">
                                        <li> <img src="assets/images/thum-1.png" alt="thum" /></li>
                                        <li> <img src="assets/images/thum-1.png" alt="thum" /></li>
                                                                            
                                    </ul>
                                    <button type="button" className="btnv" onClick={this.onClickHandler}><Link to="/view-image"><i className="fas fa-plus"></i></Link></button>
                                    
                                </div>  
                                
                                 </div>
                                 
                               
                                <ChatFooter />
                               </div>
                           </div>
                     </div>
                 </div>                 
            </section>
        )
    }
}

export default ChartBrowseImages;