import React, { Component } from 'react';

class CourseNavigationChapter extends Component {
    state = {
        chapterOpen: false
    }

    toggleChapter = () => {
        this.setState({
            chapterOpen: !this.state.chapterOpen 
        })
    }

    render() {
        const { chapterHeading, children } = this.props;
        const { chapterOpen } = this.state;

         return (
            <div>
                <div className='CourseNavigation-chapterHeading'>
                    <h4>{chapterHeading}</h4>
                    {<i className={chapterOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"} onClick={this.toggleChapter}/>}
                </div>
                {chapterOpen ? children : null}
            </div>
        )
    }
};

export default CourseNavigationChapter;
