import React, {Component} from 'react';

class Message extends Component {
  render(){
    return(
      <div>
      {this.props.messages.map((message) => {

        switch (message.type){

          case "incomingNewMessage":
          return(
            <div className="message" key={message.uniqueKey}>
             <span className="message-username">{message.username}</span>
             <span className="message-content">{message.content}</span>
            </div>
          );
          break;

          case "incomingUserUpdate":

          return(
          <div className="message system" key={message.uniqueKey}>
          {message.content}
          </div>
          );

          break;
        }


      })}
      </div>
    );
  }
}



export default Message;
