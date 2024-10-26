import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import AddNewOfferSlider from './AddNewOfferSlider';
import AddNewOfferDetails from './AddNewOfferDetails';
import AddNewOfferCategory from './AddNewOfferCategory';
import './AddNewOffer.css';

 class AddNewOffer extends Component {
    render() {
        return (
            <section className="new_offers">
            <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="4">
                            <AddNewOfferSlider />                         
                        </MDBCol>
                        <MDBCol xl="4">
                            <AddNewOfferDetails />
                        </MDBCol>
                        <MDBCol xl="4">
                            <AddNewOfferCategory />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}

export default AddNewOffer;