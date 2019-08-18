import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import { Classes, Scope, This, VarLetConst, DataTypes, Prototypes, Synchronous } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './Concepts.scss';

class Concepts extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        const activeIndex = getNavigationIndex('concepts', slug);
        this.updateActiveIndex(activeIndex);
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('concepts', `javascript/${slug}`));
    }

    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'concepts', activeIndex}));
    }

    navigationChapters = [
        {
            name: 'concepts',
            type: 'basic',
            chapterHeading: null,
            chapterLinks: [
                {
                    to: '/concepts/javascript/classes',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Classes',
                    activeIndex: 0,
                },
                {
                    to: '/concepts/javascript/scope',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Scope',
                    activeIndex: 1,
                },
                {
                    to: '/concepts/javascript/this',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'This',
                    activeIndex: 2,
                },
                {
                    to: '/concepts/javascript/var-let-const',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Var, Let, Const',
                    activeIndex: 3,
                },
                {
                    to: '/concepts/javascript/data-types',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Data types',
                    activeIndex: 4,
                },
                {
                    to: '/concepts/javascript/prototypes',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Prototypes',
                    activeIndex: 5,
                },
                {
                    to: '/concepts/javascript/synchronous',
                    type: LINK_TYPE.INTERNAL,
                    onClick:this.updateActiveIndex,
                    text: 'Synchronous',
                    activeIndex: 6,
                }
            ]
        }
    ]  

    render() {
        const { activeIndex } = this.props;

        return (
            <div className='Concepts'>
                <div className='container'> 
                    <div className='page-content'>
                        <PageNavigation navigationChapters={this.navigationChapters} />

                        <div className='page-contentRight'>
                            {activeIndex === 0 && <Classes />}
                            {activeIndex === 1 && <Scope />}
                            {activeIndex === 2 && <This />}
                            {activeIndex === 3 && <VarLetConst />}
                            {activeIndex === 4 && <DataTypes />}
                            {activeIndex === 5 && <Prototypes />}
                            {activeIndex === 6 && <Synchronous />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.concepts.activeIndex,
    }
};

export default connect(mapStateToProps)(Concepts);