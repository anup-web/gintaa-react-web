import React, { Component } from 'react'
import DealsTabs from './DealsTabs';
import ChatMassage from './ChatMassage';
import NewOffers from './NewOffers';
import NewJoin from './NewJoin';
import './Chat.css';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';



 class Chat extends Component {
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
                               
                               
                               <ChatMassage />
                               
                               <NewOffers />
                               <NewJoin />
                               
                               <ChatFooter />
                               </div>
                           </div>
                     </div>
                 </div>                 
            </section>
        )
    }
}

export default Chat;