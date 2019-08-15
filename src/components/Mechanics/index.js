import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation, Link } from '../../components/';
import { SyntaxParser, LexicalEnvironment, ExecutionContext } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './Mechanics.scss';

class Mechanics extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('javascript-mechanics', slug));
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('javascript-mechanics', slug));
    }

    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'mechanics', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <Link to='/javascript-mechanics/syntax-parser' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(0)}>Syntax Parser</li>
            </Link>
            <Link to='/javascript-mechanics/lexical-environment' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(1)}>Lexical Environment</li>
            </Link>
            <Link to='/javascript-mechanics/execution-context' type={LINK_TYPE.INTERNAL}>
            <li onClick={() => this.updateActiveIndex(2)}>Execution Context</li>
        </Link>
        </ul>
    )

    render() {
        const { activeIndex } = this.props;

        return (
            <div className='Mechanics'>
                <div className='container'> 
                    <div className='Mechanics-content'>
                        <PageNavigation>{this.updateNavigation()}</PageNavigation>

                        <div className='Mechanics-rightSection'>
                            {activeIndex === 0 && <SyntaxParser />}
                            {activeIndex === 1 && <LexicalEnvironment />}
                            {activeIndex === 2 && <ExecutionContext />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.mechanics.activeIndex
    }
};

export default connect(mapStateToProps)(Mechanics);