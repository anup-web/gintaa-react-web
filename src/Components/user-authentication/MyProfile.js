import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import MyProfileOffers from './MyProfileOffers';
import MyProfileFrom from './MyProfileFrom';
//import { Link } from "react-router-dom"; 
import MyProfileImg from './MyProfileImg';
import MyProfileSocial from './MyProfileSocial';

 class MyProfile extends Component {
    render() {
        return (
            <section className="my_profile">
            <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="6">
                            <MDBRow>
                                <MDBCol xl="4">
                                    <MyProfileImg />
                                    <MyProfileSocial />
                                </MDBCol>
                                <MDBCol xl="8">
                                     <MyProfileFrom />
                                </MDBCol>
                            </MDBRow>                            
                        </MDBCol>
                        <MDBCol xl="6">
                               <MyProfileOffers />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}
export default MyProfile;