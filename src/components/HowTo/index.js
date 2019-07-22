import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { AddJavaScript, AddSass } from './components';
import './HowTo.scss';

class HowTo extends Component {
    state = {
        activeIndex: 0
    }

    updateActiveIndex = (activeIndex) => {
        this.setState({ activeIndex })
    }

    navigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}> Add JavaScript</li>
            <li onClick={() => this.updateActiveIndex(1)}> Add Sass</li>
        </ul>
    )

    render() {

        const { activeIndex } = this.state;

        return (
            <div className='Jest'>
                <div className='container'> 
                    <div className='Jest-content'>
                        <PageNavigation>{this.navigation()}</PageNavigation>

                        <div className='Jest-rightSection'>
                            {activeIndex === 0 && <AddJavaScript />}
                            {activeIndex === 1 && <AddSass />}
                            {activeIndex === 2 && <AddJavaScript />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowTo;