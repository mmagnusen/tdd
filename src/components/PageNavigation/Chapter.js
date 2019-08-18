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

    render() {
        const { toggleMobileNavigation, chapter } = this.props;
        const { chapterHeading, chapterLinks, type } = chapter;
        const { chapterOpen } = this.state;
        
         return (
            <div>
                {chapterHeading && (
                    <div className='PageNavigation-chapterHeading' onClick={this.toggleChapter}>
                        <h4>{chapterHeading}</h4>
                        {<i className={chapterOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"} />}
                    </div>
                )}
                {(type === 'basic' || chapterOpen) ? 
                    <div>
                        {
                            chapterLinks.map(link => (
                                <Link type={link.type} to={link.to} key={link.text}>
                                    <li onClick={() => { 
                                        if (type === 'basic') {
                                            link.onClick(link.activeIndex)
                                        } else {
                                            link.onClick(this.props.chapter.name, link.activeIndex)
                                        }
                                        toggleMobileNavigation && toggleMobileNavigation()
                                    }}>{link.text}</li>
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
