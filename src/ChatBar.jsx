import React, {Component} from 'react';


class ChatBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      editedUser: this.props.currentUser
    }
  }

handleKeyPress = event => {
   if (event.key === "Enter"){

    const receivedMessage = {
      username: document.getElementById("chatbar-username").value,
      content: event.target.value,
      type: "postNewMessage"
    }
    console.log("sent a message")
     this.props.addMessage(receivedMessage);
     event.target.value = "";
   }
 }

 handleNewUser = event => {
   if (event.key === "Enter"){

    if(this.state.currentUser === this.state.editedUser){
      console.log("users are the same, dummy")
    } else {
      const newUserMessage = `${this.state.currentUser} changed their username to ${this.state.editedUser}`
      const receivedMessage = {
        username: this.state.editedUser,
        type: "postUserUpdate",
        content: newUserMessage
      }
      //console.log(receivedMessage);
      console.log("sent a user update")
     this.props.addMessage(receivedMessage);

    }

   }
 }

 handleNameChange = (changeValue) => {
  const updatedName = changeValue.target.value;
  this.setState({editedUser: updatedName});
}

  render(){
    return(
      <footer className="chatbar">
        <input
        className="chatbar-username"
        id="chatbar-username"
        placeholder="Your Name"
        value={this.state.editedUser}
        onChange={this.handleNameChange}
        onKeyPress={this.handleNewUser}
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