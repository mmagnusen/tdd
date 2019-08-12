import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CourseNavigation, Link } from '../../components/';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { Introduction, AddingJavaScript } from './components';
import { getNavigationIndex } from '../../utils';
import './JavaScriptBasics.scss';

class JavaScriptBasics extends Component {
    componentDidMount() {
        // const slug = this.props.match.params.slug;
        // const activeIndex = getNavigationIndex('javascriptBasics', slug)
        // this.updateActiveIndex(activeIndex);
    }

    componentDidUpdate() {
        // const slug = this.props.match.params.slug;
        // this.updateActiveIndex(getNavigationIndex('javascriptBasics', `javascript/${slug}`));
    }

    updateActiveIndex = (activeIndex) => {
      //  this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'javascriptBasics', activeIndex}))
    }

    updateNavigation = () => (
        <ul>
            <Link to='/courses/javascript-basics/introduction' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(0)}>Introduction</li>
            </Link>
            <Link to='/courses/javascript-basics/adding-javascript' type={LINK_TYPE.INTERNAL}>
                <li onClick={() => this.updateActiveIndex(1)}>Adding JavaScript to a project</li>
            </Link>
        </ul>
    )

    render() {

        const { activeIndex } = this.props;

        return (
            <div className='JavaScriptBasics'>
                <div className='container'> 
                    <div className='JavaScriptBasics-content'>
                        <CourseNavigation>{this.updateNavigation()}</CourseNavigation>

                        <div className='JavaScriptBasics-rightSection'>
                            {activeIndex === 0 && <Introduction />}
                            {activeIndex === 1 && <AddingJavaScript />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeIndex: state.navigation.javascriptBasics
    }
};

export default connect(mapStateToProps)(JavaScriptBasics);