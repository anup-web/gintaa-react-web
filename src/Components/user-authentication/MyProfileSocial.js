import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom"; 

 class MyProfileSocial extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="social_btn">Social</h2>
                <ul className="nav_custom nav_btn">
                    <li> <Link to="/#"><i className="fab fa-facebook-f"></i> Facebook </Link> </li>
                    <li> <Link to="/#"><i className="fab fa-google"></i> Google </Link> </li>                                      
                </ul>
             </Fragment> 
        )
    }
}

export default MyProfileSocial;

