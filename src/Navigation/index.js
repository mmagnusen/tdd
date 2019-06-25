import React, { Component } from 'react';

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
            <div className='Navigation'>
                <h1>Navigation here</h1>
                <button id='login' onClick={onClick}>{loggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }
}

export default Navigation;
