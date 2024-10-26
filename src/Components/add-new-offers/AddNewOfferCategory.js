import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class AddNewOfferCategory extends Component {
    render() {
        return (
            <div className="barter_type">
                 <h4>Barter with</h4>

                 <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">Anything</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">Item</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">Service</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" value="option1" />
                    <label className="form-check-label" for="exampleRadios1">Money</label>
                  </div>

                  <form className="profile_start barter_form" action="#">
                    <div className="form_group">
                        <label for="input">Specify what you are looking for</label>
                    <div className="input-group auth_btn">                   
                       <input type="text" className="form-control pro_custom" placeholder="what item or service or how much" />                    
                    </div>
                    </div>
                  </form>  
                  
                  <div className="btn_cancel">
                      <button type="button" className="btn btn-link btn_can">Cancel</button>
                      <button type="button" className="btn post_btn"><Link to="/post">Post Offers</Link></button>                                                         
                  </div>
            </div>
        )
    }
}

export default AddNewOfferCategory;