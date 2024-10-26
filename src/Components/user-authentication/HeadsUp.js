import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import UserAppStore from './UserAppStore';
import { Link } from "react-router-dom"; 

import './Auth.css';

 class HeadsUp extends Component {
    render() {
        return (
            <section className="head_up">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="7">
                               <UserAppStore />
                        </MDBCol>
                        <MDBCol xl="5">
                          <div className="head_profile">  
                            <div className="up_inform">
                               <h2>HEADS UP !</h2>
                               <p>Certain permissions are needed. Here’s what & why. </p>
                            </div>  
                            <div className="profile_inform">
                                <h1>1. Your profile information: </h1>
                                <p>to create your profile in the system.<span> WE DO NOT SHARE YOUR PROFILE INFORMATION WITH THIRD PARTY.</span></p>
                                <h1>2. Posting on your behalf: </h1>
                                <p>in some cases if you want to share your offerings in social media you can do it from the app easily. <span>WE WILL NEVER POST ON YOUR BEHALF AUTOMATICALLY.</span></p>
                            </div>
                            <div className="button_next"><Link to="/login">Next</Link></div>
                           </div> 
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        )
    }
}

export default HeadsUp;