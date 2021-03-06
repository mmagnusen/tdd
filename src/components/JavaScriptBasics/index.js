import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageNavigation } from '../../components/';
import navigationActionGenerators from './../../redux/actions/navigationActionGenerators';
import { LINK_TYPE } from '../../constants';
import { Introduction, AddingJavaScript, DocumentObjectModel, Operators } from './components';
import { getNavigationIndex } from '../../utils';
import './JavaScriptBasics.scss';
import BasicDefinition from './components/BasicDefinition';

class JavaScriptBasics extends Component {
    componentDidMount() {
        const course = this.props.match.params.course
        const chapter = this.props.match.params.chapter;
        const slug = this.props.match.params.slug;
        const activeIndex = getNavigationIndex(chapter, slug, course)
        this.updateActiveIndex(chapter, activeIndex);
    }

    updateActiveIndex = (chapter, activeIndex) => {
      this.props.dispatch(navigationActionGenerators.updateNavigation({item: 'javascriptBasics', chapter, activeIndex}))
    }

    navigationChapters = [
        {
            name: 'introduction',
            type: 'course',
            chapterHeading: 'Introduction',
            chapterLinks: [
                {
                    to: '/courses/javascript-basics/introduction/overview',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Overview',
                    activeIndex: 0,
                },
                {
                    to: '/courses/javascript-basics/introduction/what-is-javascript',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'What is JavaScript',
                    activeIndex: 1,
                },
                {
                    to: '/courses/javascript-basics/introduction/what-can-you-do-with-javascript',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'What can you do with JavaScript',
                    activeIndex: 2,
                },
            ]
        },
        {
            name: 'basic-definition',
            type: 'course',
            chapterHeading: 'Basic definitions',
            chapterLinks: [
                {
                    to: '/courses/javascript-basics/basic-definition/variables',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Variables',
                    activeIndex: 0,
                },
                {
                    to: '/courses/javascript-basics/basic-definition/console-messages',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Console messages',
                    activeIndex: 1,
                },
            ]
        },
        {
            name: 'adding-javascript',
            type: 'course',
            chapterHeading: 'Adding JavaScript to a project',
            chapterLinks: [
                {
                    to: '/courses/javascript-basics/adding-javascript/script-tags',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Within script tags',
                    activeIndex: 0,
                },
                {
                    to: '/courses/javascript-basics/adding-javascript/separate-file',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Separate file',
                    activeIndex: 1,
                },
                {
                    to: '/courses/javascript-basics/adding-javascript/summary',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Summary',
                    activeIndex: 2,
                },
            ]
        },
        {
            name: 'operators',
            type: 'course',
            chapterHeading: 'Operators',
            chapterLinks: [
                {
                    to: '/courses/javascript-basics/operators/introduction',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Introduction',
                    activeIndex: 0,
                },
                {
                    to: '/courses/javascript-basics/operators/type-inference',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Type inference',
                    activeIndex: 1,
                },
                {
                    to: '/courses/javascript-basics/operators/assignment-operator',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Assignment operator',
                    activeIndex: 2,
                },
                {
                    to: '/courses/javascript-basics/operators/comparison-operator',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Comparison operators',
                    activeIndex: 3,
                },
                {
                    to: '/courses/javascript-basics/operators/logical-operator',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Logical operators',
                    activeIndex: 4,
                },
                {
                    to: '/courses/javascript-basics/operators/maths-operator',
                    type: LINK_TYPE.INTERNAL,
                    onClick: this.updateActiveIndex,
                    text: 'Maths operators',
                    activeIndex: 5,
                },
            ]
        }
    ]  

    render() {

        const { activeChapter, match } = this.props;

        return (
            <div className='JavaScriptBasics'>
                <div className='container'> 
                    <div className='page-content'>
                        <PageNavigation courseTitle='JavaScript Basics' navigationChapters={this.navigationChapters}/>

                        <div className='page-contentRight'>
                            {activeChapter.chapter === 'introduction' && <Introduction activeChapter={activeChapter} slug={match.params.slug} />}
                            {activeChapter.chapter === 'basic-definition' && <BasicDefinition activeChapter={activeChapter} slug={match.params.slug} />}
                            {activeChapter.chapter === 'adding-javascript' && <AddingJavaScript activeChapter={activeChapter} slug={match.params.slug} />}
                            {activeChapter.chapter === 'operators' && <Operators activeChapter={activeChapter} slug={match.params.slug} />}
                            {activeChapter.chapter === 'document-object-model' && <DocumentObjectModel activeChapter={activeChapter} slug={match.params.slug} />}
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