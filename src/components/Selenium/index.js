import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { WhatIsSelenium, SeleniumAndReact } from './components';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Selenium.scss';

class Selenium extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('selenium', slug));
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('selenium', slug));
    }


    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'selenium', activeIndex}));
    }

    navigationChapters = [
        {
            name: 'jest',
            type: 'basic',
            chapterHeading: null,
            chapterLinks: [
                {
                    to: '/selenium/what-is-selenium',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex(0),
                    text: 'What is Selenium?',
                },
                {
                    to: '/selenium/selenium-and-react',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex(1),
                    text: 'Selenium and React',
                },
            ]
        }
    ]
    
    render() {
        const { activeIndex } = this.props;

        return (
            <div className='Selenium'>
                <div className='container'>
                    <div className='Selenium-content'>
                        <PageNavigation navigationChapters={this.navigationChapters} />
                        <div className='page-contentRight'>
                            {activeIndex === 0 && <WhatIsSelenium />}
                            {activeIndex === 1 && <SeleniumAndReact />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.selenium.activeIndex,
    }
};

export default connect(mapStateToProps)(Selenium);
