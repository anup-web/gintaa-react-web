import React, { Component } from 'react'

 class ChatImageCard extends Component {
    render() {
        return (
            <div className="card chat_card">
                <img src="assets/images/card-1.png" className="card-img-top" alt="card" />
                <div className="card-body">
                    <h5 className="card-title">View More 3 images</h5>
                    <p className="card-text">Here is my car images, if you need more images i will send you latter. Let me know if you like </p>
                </div>
            </div>
        )
    }
}

export default ChatImageCard;