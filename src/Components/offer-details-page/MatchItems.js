import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class MatchItems extends Component {
    render() {
        return (
            <div className="match_items">
                 <div className="potential_items">
                      <h1>Potential match with my items</h1>

                      <div className="pro_items">
                      <ul className="nav d-flex justify-content-start">
                      <li className="nav-item"><Link to="/"><img src="assets/images/pro-s.png" alt="pro" /></Link></li>
                      <li className="nav-item"><Link to="/"><img src="assets/images/pro-s1.png" alt="pro" /></Link></li>
                      </ul>
                       </div>
                 </div>               

                 <div className="app_prostore">
                      <ul className="nav d-flex justify-content-center">
                      <li className="nav-item"><Link to="/"><img src="assets/images/app-store.png" alt="app store" /></Link></li>
                      <li className="nav-item"><Link to="/"><img src="assets/images/google-play.png" alt="app store" /></Link></li>
                      </ul>
                 </div>


             </div>

        )
    }
}

export default MatchItems;