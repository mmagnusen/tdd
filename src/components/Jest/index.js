import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation, Link } from '../../components/';
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

    navigation = () => (
        <ul>
            <Link to='/jest/what-is-jest' type={LINK_TYPE.INTERNAL}> 
                <li onClick={() => this.updateActiveIndex(0)}>What is Jest?</li>
            </Link>
            <Link to='/jest/snapshot-tests' type={LINK_TYPE.INTERNAL}>   
                <li onClick={() => this.updateActiveIndex(1)}>Snapshot tests</li>
            </Link>
            <Link to='/jest/writing-a-test' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(2)}> Writing a test</li>
            </Link>
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