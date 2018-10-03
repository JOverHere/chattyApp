import React, {Component} from 'react';


class ChatBar extends Component {

handleKeyPress = event => {
   if (event.key === "Enter"){
    console.log("enter was hit")
     this.props.addMessage(event.target.value);
     event.target.value = "";
   }
 }

  render(){
    return(
      <footer className="chatbar">
        <input
        className="chatbar-username"
        placeholder="Your Name (Optional)"
        defaultValue={this.props.currentUser}
        />
        <input
        className="chatbar-message"
        placeholder="Type a message and hit ENTER"
        onKeyPress={this.handleKeyPress} />
      </footer>

      )
  }
}

export default ChatBar;