import React, { Component } from 'react'
import { Link } from "react-router-dom"; 


 class UserAppStore extends Component {
    render() {
        return (
            <div className="user_store">
                <h1><img src="assets/images/mobile-app.png" alt="images" /></h1>                                                                
                    <div className="app_button btn_app">                                
                        <ul className="nav">
                            <li className="nav-item"> <Link to="/#"><img src="assets/images/app-store.png" alt="images" /> </Link> </li>
                            <li className="nav-item"> <Link to="/#"><img src="assets/images/app-store.png" alt="images" /> </Link> </li>                                      
                         </ul>

                    </div>
            </div>
        )
    }
}


export default UserAppStore;