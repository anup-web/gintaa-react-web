import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './OfferLive.css';
import ClientProduct from './ClientProduct';
import SocialShare from './SocialShare';
import YourMatch from './YourMatch';

 class OfferLive extends Component {
    render() {
        return (
            <section className="live_offers">
                <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <h2 className="live_title">Congratulations! <span>Your offer is live now </span></h2>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol xl="5">
                                    <ClientProduct />                
                            </MDBCol>
                            <MDBCol xl="3">
                                   <SocialShare />
                            </MDBCol>
                            <MDBCol xl="4">
                                   <YourMatch />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
            </section>
        )
    }
}

export default OfferLive;