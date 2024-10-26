import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";

 class CategoryPromatch extends Component {
    render() {
        return (
            <Fragment>
            <h2 className="pro_match">Match with my</h2>
            <div className="catepro_items">
                <ul className="nav d-flex justify-content-start">
                    <li className="nav-item"><Link to="/#"><img src="assets/images/pro-s.png" alt="pro" /></Link></li>
                    <li className="nav-item"><Link to="/#"><img src="assets/images/pro-s1.png" alt="pro" /></Link></li>
                    <li className="nav-item"><Link to="/#"><img src="assets/images/pro-s.png" alt="pro" /></Link></li>
                    <li className="nav-item"><Link to="/#"><img src="assets/images/pro-s1.png" alt="pro" /></Link></li>
                    <li className="nav-item"><Link to="/#"><img src="assets/images/pro-s1.png" alt="pro" /></Link></li>
                </ul>
             </div>
             </Fragment>
        )
    }
}

export default CategoryPromatch;