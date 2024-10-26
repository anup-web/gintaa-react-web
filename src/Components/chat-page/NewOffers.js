import React, { Component } from 'react'
import ChatImageCard from './ChatImageCard';
import OfferPopup from './OfferPopup';


 class NewOffers extends Component {

    constructor(props){
        super(props);
        this.state = { showPopup: false };
        }
      
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
       }


    render() {
        return (
            <div className="offers_new">                
                    <div className="offers_group">
                        <h4>SURAJIT : <span>TODAY 11.30 A.M</span></h4>                           
                        <div className="media offers_card">
                            <span className="hand"><i className="far fa-handshake"></i></span>
                            <div className="media-body">
                                <h5 className="mts">Surajit send an <span>Offer</span></h5>
                                <p className="me_text">Offer detail text here...</p>
                                <div className="view_btn">
                                    <button className="btnvs" onClick={this.togglePopup.bind(this)}> view offer</button> 
                                    {this.state.showPopup ?
                                        <OfferPopup
                                        closePopup={this.togglePopup.bind(this)}
                                        />
                                        : null
                                    }                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>   

                    <ChatImageCard />

                    


            </div>
        )
    }
}

export default NewOffers;