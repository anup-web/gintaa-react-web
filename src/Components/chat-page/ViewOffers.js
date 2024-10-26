import React, { Component } from 'react'

 class ViewOffers extends Component {
    render() {
        return (
            <div className="view_offers">
                <span className="hand"><i className="far fa-handshake"></i></span>
                <h5>Congratulation you got <span>2 Offers</span></h5>
                <button type="button" className="btn btn-link">View offers</button>                
            </div>
        )
    }
}

export default ViewOffers;