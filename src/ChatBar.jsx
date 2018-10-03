import React, {Component} from 'react';


class ChatBar extends Component {

handleKeyPress = event => {
   if (event.key === "Enter"){

    const receivedMessage = {
      username: document.getElementById("chatbar-username").value,
      content: event.target.value
    }
     this.props.addMessage(receivedMessage);
     event.target.value = "";
   }
 }


// handleKeyPressTwo = event => {
//    if (event.key === "Enter"){

//     const receivedUsername = {
//       username: event.target.value,
//       content: document.getElementById("chatbar-message").value
//     }
//      this.props.addMessage(receivedUsername);
//      event.target.value = "";
//    }
//  }


  render(){
    return(
      <footer className="chatbar">
        <input
        className="chatbar-username"
        id="chatbar-username"
        placeholder="Your Name (Optional)"
        value={this.props.currentUser}
        onChange={this.props.onNameChange}
        />
        <input
        className="chatbar-message"
        id="chatbar-message"
        placeholder="Type a message and hit ENTER"
        onKeyPress={this.handleKeyPress} />
      </footer>

      )
  }
}

export default ChatBar;