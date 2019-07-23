import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { AddJavaScript, AddSass } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './HowTo.scss';

class HowTo extends Component {
    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'howTo', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}> Add JavaScript</li>
            <li onClick={() => this.updateActiveIndex(1)}> Add Sass</li>
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