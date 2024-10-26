import React, { Component } from 'react'
import OfferProslider from './OfferProslider';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import OfferDetailsContent from './OfferDetailsContent';
import MatchItems from './MatchItems';
import RelatedProducts from './RelatedProducts ';
import './offerdetails.css';

class OfferDetails extends Component {
    render() {
        return (
            <section className="offer_details">
                 <MDBContainer>
                     <MDBRow>
                           <MDBCol xl="3">
                               <OfferProslider />                            
                            </MDBCol>
                           <MDBCol xl="5">
                               <OfferDetailsContent />
                           </MDBCol>
                           <MDBCol xl="4">
                               <MatchItems />
                           </MDBCol>
                     </MDBRow>
                 </MDBContainer>

                 <RelatedProducts />
            </section>
        )
    }
}

export default OfferDetails;