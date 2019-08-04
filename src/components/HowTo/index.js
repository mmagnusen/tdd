import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation, Link } from '../../components/';
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

    updateNavigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}><Link to='/how-to/add-javascript' type={LINK_TYPE.INTERNAL}> Add JavaScript</Link></li>
            <li onClick={() => this.updateActiveIndex(1)}><Link to='/how-to/add-sass' type={LINK_TYPE.INTERNAL}> Add Sass</Link></li>
            <li onClick={() => this.updateActiveIndex(2)}><Link to='/how-to/run-a-local-server' type={LINK_TYPE.INTERNAL}> Run Local Server</Link></li>
        </ul>
    )

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='HowTo'>
                <div className='container'> 
                    <div className='HowTo-content'>
                        <PageNavigation>{this.updateNavigation()}</PageNavigation>

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
        activeIndex: state.navigation.howTo
    }
};

export default connect(mapStateToProps)(HowTo);