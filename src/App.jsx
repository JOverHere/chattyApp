import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      id: [],
      currentUser: {name: "Jenna"},
      messages: [],
      userCount: 0
    };
  }

addMessage = content => {
  if(content.username !== this.state.currentUser){
    this.setState({currentUser: {name: content.username}})
  }

  const message = {
    username: this.state.currentUser.name,
    content:content.content,
    type: content.type
  };
   this.mySocket.send(JSON.stringify(message));
}

if(userCountUpdate){
  this.setState({userCount: message.userCount})
}

componentDidMount() {
  console.log("componentDidMount <App />");

  this.mySocket = new WebSocket("ws://localhost:3001");
  this.mySocket.onopen = (event) => {
  // this.mySocket.send(messages);
    console.log("connected!")
  };


  this.mySocket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data);
        console.log(newMessage)
      const updatedMessages = this.state.messages.concat(newMessage);

      //compares type of usercount, sets state

      if(newMessage.type === "userCountUpdate"){
        this.setState({userCount: newMessage.userCount});
      } else {
        this.setState({messages: updatedMessages});
      }

      console.log(this.state.messages);


    // switch (newMessage.type) {

  //     case "userUpdate":
  //     console.log("user has been updated")
  //     break;

  //     case "messageUpdate":
  //     const updatedMessages = this.state.messages.concat(newMessage);
  //     this.setState({messages: updatedMessages});
  //     console.log("updated messages")
  //     break;

  //     default:
  //     console.log(newMessage, "Whatttt are you doing?! Check your code lady.. ")
  // }
 }
}


  render() {
    return (
      <div>
  <NavBar userCount={this.state.userCount}/>
  <MessageList messages={this.state.messages}/>
  <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>
  </div>
    );
  }
}


export default App;
