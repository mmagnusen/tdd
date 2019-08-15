import React, { Component, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Link } from '../../index';
import { LINK_TYPE } from '../../../constants';
import './MobileNavigation.scss';

class MobileNavigation extends Component {

    state = {
        mobileNavOpen: false
    }

    toggleMobileNavigation = () => {
        this.setState({
          mobileNavOpen: !this.state.mobileNavOpen
        })
    }

    getDropdownMenu = () => {
    
        const { mobileNavOpen } = this.state;
    
        return (
          <Drawer anchor="left" open={mobileNavOpen} classes={{paper: 'MobileNavigation-drawer'}} onClose={this.toggleMobileNavigation}>
            <div className='MobileNavigation-dropdown'>
              <div className='MobileNavigation-dropdownInner'>
                <Fragment>
                  <Link to="/" onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Home</h3></Link>
                  <Link to='/courses/javascript-basics/introduction/overview' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Basics Course</h3></Link>
                  <Link to='/javascript-mechanics/syntax-parser' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Mechanics</h3></Link>
                  <Link to='/how-to/add-javascript' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>How to guides</h3></Link>
                  <Link to='/concepts/javascript/classes' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Concepts</h3></Link>
                  <Link to='/jest/what-is-jest' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Jest</h3></Link>
                  <Link to='/resources' onClick={this.toggleMobileNavigation}><h3 className='MobileNavigation-link MobileNavigation-loginRegister'>Resources</h3></Link>
                </Fragment>
              </div>
            </div>
          </Drawer>
        )
      }

    render() {
        return (
            <div>
                <div className='MobileNavigation'>
                    <div className='MobileNavigation-inner'>
                        <Link to='/' type={LINK_TYPE.INTERNAL}>
                            <h1>Clearli</h1>
                        </Link>
                        <section className='MobileNavigation-burger' onClick={this.toggleMobileNavigation}>
                            <section className='MobileNavigation-burgerInner'>
                                <div className='MobileNavigation-burgerRow'/>
                                <div className='MobileNavigation-burgerRow'/>
                                <div className='MobileNavigation-burgerRow'/>
                            </section>
                        </section>
                    </div>
                </div>
                {this.getDropdownMenu()}
            </div>
        )
    }
};

export default MobileNavigation;
