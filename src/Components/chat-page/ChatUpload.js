import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class ChatUpload extends Component {
    render() {
        return (
            <div className="btn_upload">
                <button type="button" className="btns" onClick={this.onClickHandler}><Link to="/browse-images"><i className="fas fa-paperclip"></i></Link></button>
                </div>
        )
    }
}

export default ChatUpload;