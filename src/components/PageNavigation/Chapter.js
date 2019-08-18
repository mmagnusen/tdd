import React, { Component } from 'react';
import { Link } from '../';

class Chapter extends Component {
    state = {
        chapterOpen: false
    }

    toggleChapter = () => {
        this.setState({
            chapterOpen: !this.state.chapterOpen 
        })
    }

    renderChapterLinks = () => {

    }

    render() {
        const { chapterHeading, chapterLinks, type } = this.props.chapter;
        const { chapterOpen } = this.state;

        console.log(this.props)

         return (
            <div>
                {chapterHeading && (
                    <div className='CourseNavigation-chapterHeading' onClick={this.toggleChapter}>
                        <h4>{chapterHeading}</h4>
                        {<i className={chapterOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"} />}
                    </div>
                )}
                {(type === 'basic' || chapterOpen) ? 
                    <div>
                        {
                            chapterLinks.map(link => (
                                <Link type={link.type} to={link.to} key={link.text}>
                                    <li onClick={link.onClick}>{link.text}</li>
                                </Link>
                            ))
                        }
                    </div>
                     : null}
            </div>
        )
    }
};

export default Chapter;
