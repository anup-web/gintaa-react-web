import React, { Component } from 'react'
import DealsTabs from './DealsTabs';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import './Chat.css';
import { Link } from "react-router-dom";



 class ChartBrowseImages extends Component {
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
                               <div className="chat_deal">
                                <ChatHeader />  
                               
                                 <div className="view_images">
                                 <Link to="/make-offer"><img src="assets/images/view-1.png" className="imgzoom" alt="view" /></Link>
                                      <div className="thum_list">
                                        <ul className="view_thum">
                                            <li> <img src="assets/images/thum-1.png" alt="thum" /></li>
                                            <li> <img src="assets/images/thum-1.png" alt="thum" /></li>  
                                            <li> <img src="assets/images/thum-1.png" alt="thum" /></li>                                                                          
                                        </ul>
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