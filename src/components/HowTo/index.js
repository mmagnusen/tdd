import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { AddJavaScript } from './components';
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
            <li onClick={() => this.updateActiveIndex(0)}> What is Jest?</li>
            <li onClick={() => this.updateActiveIndex(1)}> Snapshot tests</li>
            <li onClick={() => this.updateActiveIndex(2)}> Writing a test</li>
        </ul>
    )

    render() {

        const { activeIndex } = this.state;

        return (
            <div className='Jest'>
                <div className='container'> 
                    <h1 className='page-title'>
                        <div/>
                        Testing With Jest
                    </h1>
                    <div className='Jest-content'>
                        <PageNavigation>{this.navigation()}</PageNavigation>

                        <div className='Jest-rightSection'>
                            {activeIndex === 0 && <AddJavaScript />}
                            {activeIndex === 1 && <AddJavaScript />}
                            {activeIndex === 2 && <AddJavaScript />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowTo;