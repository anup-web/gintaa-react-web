import React, { Component } from 'react'

 class PopupTake extends Component {
    render() {
        return (
            <div className="popup_take">
                <h1 className="take_title">And Take</h1>
            <div className="take_group">
            <h2 className="group_title">Anup Ghosal Send you an offer</h2>
            <div className="media">                
                <img src="assets/images/take-1.png" className="mr-3" alt="take" />
                <div className="media-body mb_t">
                    <h4 className="mt-0">Embark by CYCLE </h4>
                    <h5 className="mt-0">Kids Bike </h5>
                    <p className="product_price">Rs. 5000</p>
                    <div className="take_btn">
                        <button className="btns" type="button" >Accept</button>
                        <button className="btn-s" type="button" >Reject offer</button>
                    </div>
                </div>
            </div>
            </div>

            <div className="take_group">
            <h2 className="group_title">Anup Ghosal Send you an offer</h2>
            <div className="media">                
                <img src="assets/images/take-1.png" className="mr-3" alt="take" />
                <div className="media-body mb_t">
                    <h4 className="mt-0">Embark by CYCLE </h4>
                    <h5 className="mt-0">Kids Bike </h5>
                    <p className="product_price">Rs. 5000</p>
                    <div className="take_btn">
                        <button className="btns" type="button" >Accept</button>
                        <button className="btn-s" type="button" >Reject offer</button>
                    </div>
                </div>
            </div>
            </div>

            </div> 
        )
    }
}
export default PopupTake;