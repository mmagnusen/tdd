import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from '../../../';
import './MaterialNavigation.scss';

class MaterialNavigation extends Component {

    state = {
        navOpen: false
    }

    toggleMobileNavigation = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    getDropdownMenu = () => {
    
        const { navOpen } = this.state;
        const { links } = this.props;
    
        return (
          <Drawer anchor="left" open={navOpen} classes={{paper: 'MobileNavigation-drawer'}} onClose={this.toggleMobileNavigation}>
            <div className='MobileNavigation-dropdown'>
                <div className='MobileNavigation-dropdownInner'>
                    <ul>
                        {links.map((link) => (
                            <Link type={link.type} to={link.to} key={link.text}>
                                <li onClick={() => {
                                    link.onClick()
                                    this.toggleMobileNavigation()
                               
                                }}>{link.text}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
          </Drawer>
        )
      }

    render() {
        return (
            <div className='MaterialNavigation'>
                <i className="fas fa-compass" onClick={this.toggleMobileNavigation}/>
                {this.getDropdownMenu()}
            </div>
        )
    }
}

export default MaterialNavigation;