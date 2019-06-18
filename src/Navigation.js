import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
    state = {
        loggedIn: false
      }

    toggleLoggedIn = () => {
       
        this.setState({ loggedIn: !this.state.loggedIn})
    }

    render() {
        const { loggedIn } = this.state
        const { onClick } = this.props
        return (
            <div>
                <h1>Navigation here</h1>
                <button id='login' onClick={onClick}>{loggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }
}

export default Navigation;
