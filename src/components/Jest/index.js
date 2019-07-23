import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { WhatIsJest, SnapshotTests, WritingATest } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Jest.scss';

class Jest extends Component {
    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'jest', activeIndex}))
    }

    navigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}> What is Jest?</li>
            <li onClick={() => this.updateActiveIndex(1)}> Snapshot tests</li>
            <li onClick={() => this.updateActiveIndex(2)}> Writing a test</li>
        </ul>
    )

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='Jest'>
                <div className='container'> 
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
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.jest
    }
};

export default connect(mapStateToProps)(Jest);