import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import UserAppStore from './UserAppStore';
import { Link } from "react-router-dom"; 

 class LoginVerify extends Component {
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
                        <div className="login_Title">
                           <h2>Excellent choice !</h2>
                           <p>Please verify the OTP (one time password) sent to <span>98XXX XXX01</span></p>
                        </div> 

                        <div className="login_form">
                            <form className="login-start" action="#">
                              <div className="form_group">
                                <label for="input">one time password</label>
                                <div className="input-group auth_control">                               
                                    <input type="text" className="form-control verify_custom" placeholder="98 88 55 66 87 34" />                              
                                </div>
                                </div>
                            </form>                            

                            <ul className="nav_custom verify_log">
                                <li> <Link to="/profile"><i class="fas fa-check"></i> VERIFIED </Link> </li>                                                                  
                            </ul>
                            <h4 className="auth_term">by joining you agree to our <Link to="/#">terms</Link> </h4>
                        </div>
                     </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
        )
    }
}

export default LoginVerify;