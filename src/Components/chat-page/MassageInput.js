import React, { Component } from 'react'
import ChatUpload from './ChatUpload';

 class MassageInput extends Component {
    render() {
        return (
            <div className="massage_box">
                
                <form className="chat_form">
                    <div className="group-customchat">
                        <h4 className="icon_at"><i className="fas fa-at"></i></h4>
                        <div className="custom_select">
                            <select className="form-control ">
                            <option selected>Reply All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="input_control">
                        <input type="text" className="form_control" placeholder="Type Your Massage" />
                        </div>
                        <div className="append_custom">
                            <button className="btns" type="button" ><i className="fas fa-location-arrow"></i></button>
                        </div>
                        
                    </div>
                    <ChatUpload /> 
                </form>
               
            </div>
        )
    }
}

export default MassageInput;