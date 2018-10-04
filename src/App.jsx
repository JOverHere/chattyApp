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
      messages: []

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

componentDidMount() {
  console.log("componentDidMount <App />");

  this.mySocket = new WebSocket("ws://localhost:3001");
  this.mySocket.onopen = (event) => {
  // this.mySocket.send(messages);
    console.log("connected!")
  };


  this.mySocket.onmessage = (event) => {
    const newMessage = JSON.parse(event.data);
      const updatedMessages = this.state.messages.concat(newMessage);
      this.setState({messages: updatedMessages});


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
  <NavBar/>
  <MessageList messages={this.state.messages}/>
  <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>
  </div>
    );
  }
}

// class NavBar extends Component {
//   render(){
//     return (
//     <nav className="navbar">
//         <a href="/" className="navbar-brand">Chatty</a>
//       </nav>
//       );
//   }
// }

// class Messages extends Component {
//   render(){
//     return(
//     <main className="messages">
//       <div className="message">
//        <span className="message-username">Anonymous1</span>
//        <span className="message-content">I won't be impressed with technology until I can download food.</span>
//       </div>
//      <div className="message system">
//        Anonymous1 changed their name to nomnom.
//      </div>
//     </main>

//       )
//   }
// }

// class FormInput extends Component {
//   render(){
//     return(
//       <footer className="chatbar">
//         <input className="chatbar-username" placeholder="Your Name (Optional)" />
//         <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
//       </footer>

//       )
//   }
// }

export default App;
