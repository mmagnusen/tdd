import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from '../';
import { getNavigationIndex } from '../../utils';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Enzyme.scss';

class Enzyme extends Component {
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

    render() {
        const { activeIndex } = this.props;
        return (
            <Fragment>
                <Helmet 
                    title='Enzyme Testing with React.js'
                    description='Enzyme is a testing framework created by the team at Air bnb. Learn how it works and how to add it to your JavaScript project.'  
                />
                <div className='Enzyme'>
                {activeIndex === 0 (
                    <div className='container'>  
                        <h1>Enzyme</h1>
                    </div>
                )}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.selenium.activeIndex,
    }
};

export default connect(mapStateToProps)(Enzyme);
