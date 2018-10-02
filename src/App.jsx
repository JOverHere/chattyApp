import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: {name: "Bob"},
      messages: [
    {
      id: "001",
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: "002",
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}


  }
  render() {
    return (
      <div>
  <NavBar/>
  <MessageList messages={this.state.messages}/>
  <ChatBar currentUser={this.state.currentUser.name}/>
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
