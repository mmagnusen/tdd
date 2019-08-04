import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation, Link } from '../../components/';
import { Classes, Scope, This, VarLetConst, DataTypes, Prototypes } from './components';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { getNavigationIndex } from '../../utils';
import './Concepts.scss';

class Concepts extends Component {
    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('concepts', slug));
    }

    componentDidUpdate() {
        const slug = this.props.match.params.slug;
        this.updateActiveIndex(getNavigationIndex('concepts', slug));
    }

    updateActiveIndex = (activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'concepts', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}><Link to='/concepts/classes' type={LINK_TYPE.INTERNAL}>Classes</Link></li>
            <li onClick={() => this.updateActiveIndex(1)}><Link to='/concepts/scope' type={LINK_TYPE.INTERNAL}>Scope</Link></li>
            <li onClick={() => this.updateActiveIndex(2)}><Link to='/concepts/this' type={LINK_TYPE.INTERNAL}>This</Link></li>
            <li onClick={() => this.updateActiveIndex(3)}><Link to='/concepts/var-let-const' type={LINK_TYPE.INTERNAL}>Var, Let, Const</Link></li>
            <li onClick={() => this.updateActiveIndex(4)}><Link to='/concepts/data-types' type={LINK_TYPE.INTERNAL}>Data types</Link></li>
            <li onClick={() => this.updateActiveIndex(5)}><Link to='/concepts/prototypes' type={LINK_TYPE.INTERNAL}>Prototypes</Link></li>
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