import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { Classes } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Concepts.scss';

class Concepts extends Component {
    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'concepts', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}>Classes</li>
        </ul>
    )

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='Concepts'>
                <div className='container'> 
                    <div className='Concepts-content'>
                        <PageNavigation>{this.updateNavigation()}</PageNavigation>

                        <div className='Concepts-rightSection'>
                            {activeIndex === 0 && <Classes />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.concepts
    }
};

export default connect(mapStateToProps)(Concepts);