import React, { Component } from 'react'


 class AddNewOfferDetails extends Component {
    render() {
        return (
            <div className="newoffers_details">
                <form className="profile_start" action="#">
                    <div className="form_group">
                        <label for="input">Item/Offer name</label>
                    <div className="input-group auth_btn">                   
                       <input type="text" className="form-control pro_custom" placeholder="add itm or offer name " />                    
                    </div>
                    </div>

                    <div className="form_group">
                        <label for="input">Description</label>
                    <div className="input-group auth_btn">                   
                       <input type="text" className="form-control pro_custom" placeholder="Describe your item as detail as possible,
                        add #tags to increase search visibility" />                    
                    </div>
                    </div>
                    
                    <div className="select_tag">
                        <h2>Select Tags </h2>
                       <div className="select_btn">
                        <button type="button" className="btn btn-link">Bike</button>
                        <button type="button" className="btn btn-link">Bycycle</button>
                        <button type="button" className="btn btn-link">Bike</button>
                        <button type="button" className="btn btn-link">Bycycle</button>
                        <button type="button" className="btn btn-link">Bike</button>
                        <button type="button" className="btn btn-link">Bycycle</button>
                        <button type="button" className="btn btn-link">Bike</button>
                        <button type="button" className="btn btn-link">Bycycle</button>
                        <button type="button" className="btn btn-link">Bike</button>
                        <button type="button" className="btn btn-link">Bycycle</button>
                        </div>
                    </div>

                   <div className="select_radio">
                       <h4>Condition (incase of item)</h4>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="option1" />
                            <label className="form-check-label" for="inlineRadio1">New</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="option2" />
                            <label className="form-check-label" for="inlineRadio2">Used</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions"  value="option2" />
                            <label className="form-check-label" for="inlineRadio2">Not an item</label>                       
                        </div>
                    </div>  

                    
                  </form> 

                  <div className="change_loc">
                    <h2>Location</h2>
                    <ul>
                        <li>Kolkata</li>
                        <li><button type="button" className="btn btn-link">Change</button></li>
                    </ul>
                  </div>
            </div>
        )
    }
}

export default AddNewOfferDetails;




