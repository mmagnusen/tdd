import React, { Component } from 'react';

class Chapter extends Component {
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
                <div className='CourseNavigation-chapterHeading' onClick={this.toggleChapter}>
                    <h4>{chapterHeading}</h4>
                    {<i className={chapterOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"} />}
                </div>
                {chapterOpen ? <div>chapter</div> : null}
            </div>
        )
    }
};

export default Chapter;
