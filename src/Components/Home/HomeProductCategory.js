// eslint-disable-next-line
import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
const HomeProductCategory = () => {
    return (
   
       <section className="home_category">
        
        <MDBContainer>
            <MDBRow>
               <MDBCol xl="12" sm="12" className="mb-4">
                    <h2>Popular Category</h2>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <MDBContainer>
        <MDBRow>
        <MDBCol xl="12" sm="12" className="mb-4">
                    <ul className="item nav">
                        <li className="nav-item"><Link to="/category">Used Car</Link></li>
                        <li className="nav-item"><Link to="/category">Motorcycles</Link></li>
                        <li className="nav-item"><Link to="/category">Mobile Phones</Link></li>
                        <li className="nav-item"><Link to="/category">Houses & Apartments</Link></li>
                        <li className="nav-item"><Link to="/category">Scooters</Link></li>
                        <li className="nav-item"><Link to="/category">Commercial Vehicles</Link></li>
                        <li className="nav-item"><Link to="/category">Motorcycles</Link></li>
                        <li className="nav-item"><Link to="/category">Mobile Phones</Link></li>
                        <li className="nav-item"><Link to="/category">Houses & Apartments</Link></li>
                        <li className="nav-item"><Link to="/category">Scooters</Link></li>
                        <li className="nav-item"><Link to="/category">Commercial Vehicles</Link></li>
                        <li className="nav-item"><Link to="/category">See All Categorys</Link></li>                        
                    </ul>
                
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        </section>
  
    );
}



export default HomeProductCategory;