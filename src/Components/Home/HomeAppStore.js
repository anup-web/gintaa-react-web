import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Link } from 'react-router-dom';

class HomeAppStore extends Component {

    render() {
        return (            
            <div className="app_store">
                <MDBContainer>
                       <MDBRow>
                           <MDBCol xl="7">
                               <div className="app_dstore">
                                <h1><img src="assets/images/download.png" alt="download" /></h1>
                                <h2>Download our app</h2>
                                
                                <div className="app_button">                                
                                <ul className="nav">
                                    <li className="nav-item"> <Link to="/headsup"><img src="assets/images/app-store.png" alt="app store" /> </Link></li>
                                    <li className="nav-item"> <Link to="/headsup"><img src="assets/images/google-play.png" alt="app store" /> </Link></li>                                      
                                </ul>

                                </div>
                                </div>
                           </MDBCol>
                           <MDBCol xl="5">
                               <div className="app_mobile">
                                <img src="assets/images/mobile-app.png" alt="mobile app" />
                                </div>
                           </MDBCol>
                       </MDBRow>
                     
                </MDBContainer>
                
            </div>
            
        )
    }
}


export default HomeAppStore;