import React, {Component} from 'react';



class NavBar extends Component {
  render(){
    return (
    <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p className="online"><strong>{this.props.userCount} users online</strong></p>
      </nav>
      );
  }
}

export default NavBar;