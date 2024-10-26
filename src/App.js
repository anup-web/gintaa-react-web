import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/Footer/About';
import Contact from './Components/Footer/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import OfferDetails from './Components/offer-details-page/OfferDetails';
import Category from './Components/category/Category';
import HeadsUp from './Components/user-authentication/HeadsUp';
import LoginWelcome from './Components/user-authentication/LoginWelcome';
import LoginVerify from './Components/user-authentication/LoginVerify';
import MyProfile from './Components/user-authentication/MyProfile';
import AddNewOffer from './Components/add-new-offers/AddNewOffer';
import OfferLive from './Components/OffersLive/OfferLive';
import Chat from './Components/chat-page/Chat';
import ChatBrowseImages from './Components/chat-page/ChatBrowseImages';
import ChatViewImage from './Components/chat-page/ChatViewImage';
import MakeOffer from './Components/chat-page/MakeOffer';
import './App.css';
//import NotFound from './Components/NotFound/NotFound';

class App extends Component{
  render() {
    return (
          <Router>  
            <div>  
            <Header />                       
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />  
            <Route path="/offer-details" component={OfferDetails} /> 
            <Route path="/Category" component={Category} /> 
            <Route path="/headsup" component={HeadsUp} />
            <Route path="/login" component={LoginWelcome} />
            <Route path="/verify" component={LoginVerify} />
            <Route path="/profile" component={MyProfile} />
            <Route path="/new-offer" component={AddNewOffer} />
            <Route path="/Post" component={OfferLive} />
            <Route path="/chat" component={Chat} />
            <Route path="/browse-images" component={ChatBrowseImages} />
            <Route path="/view-image" component={ChatViewImage} />
            <Route path="/make-offer" component={MakeOffer} />
            {/* <Route path="*" component={NotFound}/> */}
            <Footer />
            </div>         
          </Router>
    );
  }
}
export default App;

