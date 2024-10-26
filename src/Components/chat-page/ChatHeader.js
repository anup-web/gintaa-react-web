import React, { Component } from 'react'
import ItemName from './ItemName';
import UserName from './UserName';

 class ChatHeader extends Component {
    render() {
        return (
            <div className="chat_top">
               <ItemName />
               <UserName /> 
            </div>
        )
    }
}

export default ChatHeader;