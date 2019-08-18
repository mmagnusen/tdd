import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Chapter from '../Chapter';
import './MaterialNavigation.scss';

class MaterialNavigation extends Component {
    state = {
        navOpen: false
    }

    toggleMobileNavigation = () => {
        this.setState({
            navOpen: !this.state.navOpen,
        })
    }

    getDropdownMenu = () => {
        const { navOpen } = this.state;
        const { navigationChapters } = this.props;
    
        return (
          <Drawer anchor="left" open={navOpen} classes={{paper: 'MaterialNavigation-drawer'}} onClose={this.toggleMobileNavigation}>
            <div className='MaterialNavigation-dropdown'>
                <div className='MaterialNavigation-dropdownInner'>
                        {navigationChapters.map((chapter) => <Chapter key={chapter.name} chapter={chapter} toggleMobileNavigation={this.toggleMobileNavigation}/>)}
                </div>
            </div>
          </Drawer>
        )
    }

    render() {
        const {navigationChapters } = this.props;
        
        return (
            <div className='MaterialNavigation'>
                <i className="fas fa-compass" onClick={this.toggleMobileNavigation}/>
                {navigationChapters && 
                    (<div>
                        {this.getDropdownMenu()}
                    </div>
                )}
            </div>
        )
    }
}

export default MaterialNavigation;