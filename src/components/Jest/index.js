import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { WhatIsJest, SnapshotTests, WritingATest } from './components';
import './Jest.scss';

class Jest extends Component {
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
                            {activeIndex === 0 && <WhatIsJest />}
                            {activeIndex === 1 && <SnapshotTests />}
                            {activeIndex === 2 && <WritingATest />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jest;