import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      id: [],
      currentUser: {},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
  }

addMessage = content => {
  const message = {
    username: content.username,
    content:content.content
  };
   // const messages = this.state.messages.concat(message)
   // this.setState({messages: messages})
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
    console.log(newMessage);
    const updatedMessages = this.state.messages.concat(newMessage)
    this.setState({messages: updatedMessages})
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
