import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import UserAppStore from './UserAppStore';
import { Link } from "react-router-dom"; 

 class LoginWelcome extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {       
        event.preventDefault();
        this.props.history.push('/verify');
      }

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
                               <h2>Hello & Welcome!</h2>
                               <p>Let’s get started with…</p>
                            </div> 

                            <div className="login_form">
                                <form className="login-start" onSubmit={this.handleSubmit}>
                                  <div className="form_group">
                                    <label for="input">Your phone number </label>
                                    <div className="input-group auth_control">                                    
                                        <div className="input-groups">
                                            <div className="input-group-text">91</div>
                                        </div>
                                        <input type="text" 
                                        pattern="[0-9]*"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        className="form-control control_custom" 
                                        placeholder="xxxxxxxxxx" required/> 
                                                                           
                                        <button type="submit"                                         
                                        value="Submit"                                        
                                        className="btn btn-link">                                       
                                        <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                    </div>
                                </form>
                                <h2 className="social_auth">Or your social profile</h2>

                                <ul class="nav_custom">
                                    <li> <Link to="/#"><i className="fab fa-facebook-f"></i> Facebook </Link> </li>
                                    <li> <Link to="/#"><i className="fab fa-google"></i> Google </Link> </li>                                      
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

export default LoginWelcome;