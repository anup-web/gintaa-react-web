import React, { Component } from 'react'
import PopupViewOffers from './PopupViewOffers';



class OfferPopup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>          
        <button className="close_btn" onClick={this.props.closePopup}><i className="far fa-times-circle"></i></button>
        <PopupViewOffers />
        </div>
      </div>
    );
  }
}


export default OfferPopup;