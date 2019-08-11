import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation, Link } from '../../components/';
import { Classes, Scope, This, VarLetConst, DataTypes, Prototypes, Synchronous } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './Concepts.scss';

class Concepts extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        const activeIndex = getNavigationIndex('concepts', slug)
        this.updateActiveIndex(activeIndex);
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('concepts', `javascript/${slug}`));
    }

    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'concepts', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <Link to='/concepts/javascript/classes' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(0)}>Classes</li>
            </Link>
            <Link to='/concepts/javascript/scope' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(1)}>Scope</li>
            </Link>
            <Link to='/concepts/javascript/this' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(2)}>This</li>
            </Link>
            <Link to='/concepts/javascript/var-let-const' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(3)}>Var, Let, Const</li>
            </Link>
            <Link to='/concepts/javascript/data-types' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(4)}>Data types</li>
            </Link>
            <Link to='/concepts/javascript/prototypes' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(5)}>Prototypes</li>
            </Link>
            <Link to='/concepts/javascript/synchronous' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(6)}>Synchronous</li>
            </Link>
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
        activeIndex: state.navigation.concepts
    }
};

export default connect(mapStateToProps)(Concepts);