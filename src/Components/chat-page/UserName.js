import React, { Component } from 'react'

 

 class UserName extends Component {
    render() {
        return (
            <div className="media medial_client">
                <img src="assets/images/client-1.png" className="mr-3" alt="client" />
                <div className="media-body">
                    <h5 className="mt-6">Prabiran Dhar / Anything <span><i className="fas fa-ellipsis-v"></i></span> </h5>                    
                </div>
            </div>
        )
    }
}

export default UserName;