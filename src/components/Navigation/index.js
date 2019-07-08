import React, { Component } from 'react';
import { Link } from '../index'
import { LINK_TYPE } from '../../constants'
import './Navigation.scss';

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
                <Link to='/' type={LINK_TYPE.INTERNAL}><h1>TDD</h1></Link>
                <div className='Navigation-resources'>
                <Link to='/jest' type={LINK_TYPE.INTERNAL}> 
                    <p>Jest</p>
                </Link>
                <Link to='/enzyme' type={LINK_TYPE.INTERNAL}>
                    <p>Enzyme</p>
                </Link>
                    <Link to='/resources' type={LINK_TYPE.INTERNAL}>
                        <p>Resources</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navigation;
