import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class OfferDetailsContent extends Component {
    render() {
        return (
            <div className="product_content">
                 <h1>Embark by CYCLE Kids Bike <span>USED</span></h1>
                 <div className="pro_price">RS 4800</div>
                 <div className="client_loc"><img src="assets/images/location.png" alt="location" /> Beleghata, Kolkata <span>Prabiran Dhar  /  2Month ago</span></div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                 <div className="pro_chat"><Link to="/chat">Chat Now</Link></div>
            </div>
        )
    }
}

export default OfferDetailsContent;