import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render(){



    return(
    <main className="messages">
      <Message messages={this.props.messages}/>
      <div className="message system">

      </div>
    </main>

      )
  }
}

export default MessageList;