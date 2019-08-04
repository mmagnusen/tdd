import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '../';
import { LINK_TYPE } from '../../constants';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import './Footer.scss';

class Footer extends Component {
    updateActiveIndex  = (item, activeIndex) => {
        this.props.dispatch(navigationActionGenerators.updateNavigation({item, activeIndex}))
        window.scrollTo(0, 0)
    }

    render() {
        return (
        <footer className='Footer'>
            <div className='container'>
                <ul>
                    <h4>Jest</h4>
                    <li onClick={() => this.updateActiveIndex('jest', 0)}><Link to='/jest/what-is-jest' type={LINK_TYPE.INTERNAL}>What is Jest?</Link></li>
                    <li onClick={() => this.updateActiveIndex('jest', 1)}><Link to='/jest/snapshot-tests' type={LINK_TYPE.INTERNAL}>Snapshot tests</Link></li>
                    <li onClick={() => this.updateActiveIndex('jest', 2)}><Link to='/jest/writing-a-test' type={LINK_TYPE.INTERNAL}>Writing tests</Link></li>
                </ul>
                <ul>
                    <h4>Resources</h4>
                    <li><Link to='/resources/#GeneralTesting' type={LINK_TYPE.ANCHOR}>General testing</Link></li>
                    <li><Link to='/resources/#ForBeginners' type={LINK_TYPE.ANCHOR}>Helpful for beginners</Link></li>
                    <li><Link to='/resources/#Jest' type={LINK_TYPE.ANCHOR}>Jest</Link></li>
                    <li><Link to='/resources/#Selenium' type={LINK_TYPE.ANCHOR}>Selenium</Link></li>
                    <li><Link to='/resources/#GitRepos' type={LINK_TYPE.ANCHOR}>Git repositories</Link></li>
                </ul>
                <ul>
                    <h4>How To Guides</h4>
                    <li onClick={() => this.updateActiveIndex('howTo', 0)}><Link to='/how-to/add-javascript' type={LINK_TYPE.INTERNAL}>Add JavaScript to project</Link></li>
                    <li onClick={() => this.updateActiveIndex('howTo', 1)}><Link to='/how-to/add-sass' type={LINK_TYPE.INTERNAL}>Add Sass to project</Link></li>
                    <li onClick={() => this.updateActiveIndex('howTo', 2)}><Link to='/how-to/run-a-local-server' type={LINK_TYPE.INTERNAL}>Run local server</Link></li>
                </ul>
                <ul>
                    <h4>Concepts</h4>
                    <li onClick={() => this.updateActiveIndex('concepts', 0)}><Link to='/concepts/classes' type={LINK_TYPE.INTERNAL}>Classes</Link></li>
                    <li onClick={() => this.updateActiveIndex('concepts', 1)}><Link to='/concepts/scope' type={LINK_TYPE.INTERNAL}>Scope</Link></li>
                    <li onClick={() => this.updateActiveIndex('concepts', 2)}><Link to='/concepts/this' type={LINK_TYPE.INTERNAL}>This</Link></li>
                    <li onClick={() => this.updateActiveIndex('concepts', 3)}><Link to='/concepts/var-let-const' type={LINK_TYPE.INTERNAL}>Var, Let, Const</Link></li>
                    <li onClick={() => this.updateActiveIndex('concepts', 4)}><Link to='/concepts/data-types' type={LINK_TYPE.INTERNAL}>Data Types</Link></li>
                    <li onClick={() => this.updateActiveIndex('concepts', 5)}><Link to='/concepts/prototypes' type={LINK_TYPE.INTERNAL}>Prototypes</Link></li>
                </ul>
            </div>
        </footer>
    )}
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.jest
    }
};

export default connect(mapStateToProps)(Footer);
