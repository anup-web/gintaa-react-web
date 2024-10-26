import React, { Component } from 'react'
import { Link } from "react-router-dom"; 

 class ClientProduct extends Component {
    render() {
        return (
            <div className="card custom_card">
                <img src="assets/images/pro-3.png" className="card-img-top" alt="pro" />
                <div className="card-body">
                    <h5 className="card-title">Black hardtail bike</h5>
                    <h4 className="card_link"><Link to="/">www.gintaa.com/1254632/cyclebhb2019</Link></h4>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    
                </div>
            </div>
        )
    }
}

export default ClientProduct;