import React, { Component } from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBNavItem, MDBNavbarNav } from "mdbreact";
import { Link } from 'react-router-dom';
import SelectCountry from '../Home/SelectCountry';
import './Header.css';

 class Header extends Component {
  state = {
    isOpen: false
  };
  

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
   const isTop = window.scrollY > 100;
   const navs = document.getElementById('navs');
   if (isTop) {
        navs.classList.add('scrolled');
        } else{
        navs.classList.remove('scrolled');		 
   }   
  });
  }
 
  componentWillUnmount(){
  window.removeEventListener('scroll');
  }
  
  render() {
    return (     
      <div id="navs" className="navs">
       <MDBContainer>        
          <MDBNavbar dark expand="xl">
          <MDBNavbarBrand>
          <Link to="/#"><img src="assets/images/logo.png" alt="images" /></Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse isOpen={this.state.isOpen} navbar>

            <div className="country_list">
            <img src="assets/images/location.png" alt="images" /> <SelectCountry />
            </div>
          <form className="search-form" action="#">
              <input type="text" placeholder="search" />
               <button type="submit"><i className="fas fa-search"></i></button>
            </form>
              
            <MDBNavbarNav right className="sign_up">
            <MDBNavItem > <Link to="/login">Sign in </Link> </MDBNavItem>
            <MDBNavItem > <Link to="/login">Sign up for FREE </Link></MDBNavItem>
          </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>        
      </MDBContainer>      
      </div>
      
      );
    }
}



export default Header;


