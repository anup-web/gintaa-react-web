import React, { Component } from 'react'

 class MyProfileImg extends Component {
    render() {
        return (
            <div className="profile_img">   
                <figure className="figure">
                       <img src="assets/images/profile-1.png" className="figure-img img-fluid rounded" alt="profile" />
                       <figcaption className="figure-caption">Change Photo</figcaption>
                </figure>            
                
            </div>
        )
    }
}

export default MyProfileImg;