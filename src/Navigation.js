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
        return (
            <div>
                <h1>Navigation here</h1>
                <button id='login' onClick={this.toggleLoggedIn}>{loggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }
}

export default Navigation;
