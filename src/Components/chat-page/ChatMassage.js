import React, { Component } from 'react'
import ViewOffers from './ViewOffers';

 class ChatMassage extends Component {
    render() {
        return (
            <div className="chat_massage">
                <div className="chatclient_first">
                    <div className="comment_group">
                        <h4>SURAJIT : <span>TODAY 11.30 A.M</span></h4>
                        <p className="comment"><span>Abcdef gh</span></p>
                    </div>
                </div>
                <ViewOffers />
                <div className="chatclient_second">
                    <div className="comment_groups">
                        <h4>YOU : <span>TODAY 12.30 P.M</span></h4>
                        <p className="comment"><span>Abcdef gh</span></p>
                    </div> 
                </div>
            </div>
        )
    }
}

export default ChatMassage;