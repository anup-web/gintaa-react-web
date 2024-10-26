import React, { Component } from 'react'
//import { Link } from "react-router-dom"; 

 class MyProfileFrom extends Component {
    render() {
        return (
            <div className="profile_input">
                <form className="profile_start" action="#">
                    <div className="form_group">
                        <label for="input">Name</label>
                    <div className="input-group auth_btn">                   
                       <input type="text" className="form-control pro_custom" placeholder="Prabiran Dhar" />                    
                    </div>
                    </div>

                    <div className="form_group">
                        <label for="input">Phone</label>
                    <div className="input-group auth_btn">                                    
                        <div className="pro-groups">
                       <div className="input-group-text">91</div>
                     </div>
                       <input type="text" className="form-control pro_custom" placeholder="9002978652" />                                    
                        <button type="submit" className="btn btn-link">Verified</button>
                    </div>
                    </div>

                    <div className="form_group group_custom">
                        <label for="input">Email</label>
                    <div className="input-group auth_btn">                                    
                        <input type="text" className="form-control pro_custom" placeholder="prabiran89@gmail.com" />                                    
                        <button type="submit" className="btn btn-link">Not Verified</button>
                    </div>
                    </div>
                </form>                 
                <div className="edit_details"><button type="button" className="btn btn-link">Edit details</button></div>
                
                <div className="form_group">
                        <label for="input">Home</label>
                    <div className="input-group auth_btn">                   
                       <input type="text" className="form-control pro_custom" placeholder="79, Rishi Bankim Road, Kolkata 700023" />                    
                    </div>
               </div>
               <div className="add_new"><button type="button" className="btn btn-link">ADD NEW LOCATION</button></div>
            </div>
        )
    }
}

export default MyProfileFrom;