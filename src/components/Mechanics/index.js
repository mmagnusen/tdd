import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
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


    navigationLinks = [
        {
            to: '/javascript-mechanics/syntax-parser',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex(0),
            text: 'Syntax Parser'
        },
        {
            to: '/javascript-mechanics/lexical-environment',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex(1),
            text: 'Lexical Environment'
        },
        {
            to: '/javascript-mechanics/execution-context',
            type: LINK_TYPE.INTERNAL,
            onClick:this.updateActiveIndex(2),
            text: 'Execution Context'
        },
    ]

    render() {
        const { activeIndex } = this.props;

        return (
            <div className='Mechanics'>
                <div className='container'> 
                    <div className='Mechanics-content'>
                    <PageNavigation links={this.navigationLinks} />

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