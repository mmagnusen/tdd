import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CourseNavigation, CourseNavigationChapter, Link } from '../../components/';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { Introduction, AddingJavaScript, DocumentObjectModel } from './components';
import { getNavigationIndex } from '../../utils';
import './JavaScriptBasics.scss';

class JavaScriptBasics extends Component {
    componentDidMount() {
        const course = this.props.match.params.course
        const chapter = this.props.match.params.chapter;
        const slug = this.props.match.params.slug;
        const activeIndex = getNavigationIndex(chapter, slug, course)
        this.updateActiveIndex(chapter, activeIndex);
    }

    componentDidUpdate() {
        // const slug = this.props.match.params.slug;
        // this.updateActiveIndex(getNavigationIndex('javascriptBasics', `javascript/${slug}`));
    }

    updateActiveIndex = (chapter, activeIndex) => {
      this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'javascriptBasics', chapter, activeIndex}))
    }

    updateNavigation = () => (
        <Fragment>
            <CourseNavigationChapter chapterHeading='Introduction'>
                <ul>
                    <Link to='/courses/javascript-basics/introduction/what-is-javascript' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('introduction', 0)}>What is JavaScript</li>
                    </Link>
                    <Link to='/courses/javascript-basics/introduction/what-can-you-do-with-javascript' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('introduction', 1)}>What can you do with JavaScript</li>
                    </Link>
                </ul>
            </CourseNavigationChapter>
            <CourseNavigationChapter chapterHeading='Adding JavaScript to a project'>
                <ul>
                    <Link to='/courses/javascript-basics/adding-javascript/script-tags' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('adding-javascript', 0)}>Within script tags</li>
                    </Link>
                    <Link to='/courses/javascript-basics/adding-javascript/separate-file' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('adding-javascript', 1)}>Separate file</li>
                    </Link>
                </ul>
            </CourseNavigationChapter>
            <CourseNavigationChapter chapterHeading='The DOM'>
                <ul>
                    <Link to='/courses/javascript-basics/document-object-model/what-is-the-dom' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('document-object-model', 0)}>What is the DOM</li>
                    </Link>
                    <Link to='/courses/javascript-basics/document-object-model/manipulating-the-dom' type={LINK_TYPE.INTERNAL}>
                        <li onClick={() => this.updateActiveIndex('document-object-model', 1)}>Manipulating the DOM</li>
                    </Link>
                </ul>
            </CourseNavigationChapter>
        </Fragment>
    )

    render() {

        const { activeChapter, match } = this.props;

        return (
            <div className='JavaScriptBasics'>
                <div className='wide-container'> 
                    <div className='JavaScriptBasics-content'>
                        <CourseNavigation courseTitle='JavaScript Basics'>{this.updateNavigation()}</CourseNavigation>

                        <div className='JavaScriptBasics-rightSection'>
                            {activeChapter.chapter === 'introduction' && <Introduction activeChapter={activeChapter} slug={match.params.slug} />}
                            {activeChapter.chapter === 'adding-javascript' && <AddingJavaScript activeIndex={activeChapter.activeIndex} slug={match.params.slug} />}
                            {activeChapter.chapter === 'document-object-model' && <DocumentObjectModel activeIndex={activeChapter.activeIndex} slug={match.params.slug} />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeChapter: state.navigation.javascriptBasics
    }
};

export default connect(mapStateToProps)(JavaScriptBasics);