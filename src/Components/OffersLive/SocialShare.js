import React, { Component } from 'react'
import { Link } from "react-router-dom"; 

 class SocialShare extends Component {
    render() {
        return (
               <div className="social_share">
                   <h2>Share your offer with friends</h2>
                <ul className="share_custom">
                    <li> <Link to="/"><i className="fab fa-facebook-f"></i> Share on facebook </Link> </li>
                    <li> <Link to="/"><i className="fab fa-twitter"></i> Share on twitter </Link> </li> 
                    <li> <Link to="/"><i className="fab fa-whatsapp"></i> Share on whatsapp </Link> </li>
                    <li> <Link to="/"><i className="fab fa-pinterest-p"></i> Share on pinterest </Link> </li>                                     
                </ul>
               </div> 
        )
    }
}

export default SocialShare;