import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { AddJavaScript, AddSass, RunServer } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './HowTo.scss';

class HowTo extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('how-to', slug));
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('how-to', slug));
    }

    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'howTo', activeIndex}))
    }

    navigationLinks = [
        {
            to: '/how-to/add-javascript',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex,
            text: 'Add JavaScript',
            activeIndex: 0
        },
        {
            to: '/how-to/add-sass',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex,
            text: 'Add Sass',
            activeIndex: 1
        },
        {
            to: '/how-to/run-a-local-server',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex,
            text: 'Run Local Server',
            activeIndex: 2
        },
    ]

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='HowTo'>
                <div className='container'> 
                    <div className='page-content'>
                        <PageNavigation links={this.navigationLinks} />

                        <div className='HowTo-rightSection'>
                            {activeIndex === 0 && <AddJavaScript />}
                            {activeIndex === 1 && <AddSass />}
                            {activeIndex === 2 && <RunServer />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.howTo.activeIndex
    }
};

export default connect(mapStateToProps)(HowTo);