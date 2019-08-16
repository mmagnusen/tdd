import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { WhatIsJest, SnapshotTests, WritingATest } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './Jest.scss';

class Jest extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('jest', slug));
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('jest', slug));
    }


    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'jest', activeIndex}))
    }


    navigationLinks = [
        {
            to: '/jest/what-is-jest',
            type: LINK_TYPE.INTERNAL,
            onClick: this.updateActiveIndex(0),
            text: 'What is Jest?'
        },
        {
            to: '/jest/snapshot-tests',
            type: LINK_TYPE.INTERNAL,
            onClick: this.updateActiveIndex(1),
            text: 'Snapshot tests'
        },
        {
            to: '/jest/writing-a-test',
            type: LINK_TYPE.INTERNAL,
            onClick: this.updateActiveIndex(2),
            text: 'Writing a test'
        },
    ]

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='Jest'>
                <div className='container'> 
                    <div className='Jest-content'>
                        <PageNavigation links={this.navigationLinks} />

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
        activeIndex: state.navigation.jest.activeIndex
    }
};

export default connect(mapStateToProps)(Jest);