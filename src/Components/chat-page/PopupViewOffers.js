import React, { Component } from 'react'
import PopupGive from './PopupGive';
import PopupTake from './PopupTake';

 class PopupViewOffers extends Component {
    render() {
        return (
            <div className="view_popups">
                <PopupGive />
                <PopupTake />
            </div>
        )
    }
}


export default PopupViewOffers;