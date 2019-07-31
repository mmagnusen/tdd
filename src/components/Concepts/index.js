import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { Classes, Scope, This, VarLetConst, DataTypes, Prototypes } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Concepts.scss';

class Concepts extends Component {
    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'concepts', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}>Classes</li>
            <li onClick={() => this.updateActiveIndex(1)}>Scope</li>
            <li onClick={() => this.updateActiveIndex(2)}>This</li>
            <li onClick={() => this.updateActiveIndex(3)}>Var, Let, Const</li>
            <li onClick={() => this.updateActiveIndex(4)}>Data types</li>
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
                            {activeIndex === 1 && <Scope />}
                            {activeIndex === 2 && <This />}
                            {activeIndex === 3 && <VarLetConst />}
                            {activeIndex === 4 && <DataTypes />}
                            {activeIndex === 5 && <Prototypes />}
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