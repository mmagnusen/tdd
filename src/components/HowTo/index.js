import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { AddJavaScript } from './components';
import './HowTo.scss';

class HowTo extends Component {
    state = {
        activeIndex: 0
    }

    updateActiveIndex = (activeIndex) => {
        this.setState({ activeIndex })
    }

    navigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}> Add JavaScript</li>
        </ul>
    )

    render() {

        const { activeIndex } = this.state;

        return (
            <div className='HowTo'>
                <div className='container'> 
                    <div className='HowTo-content'>
                        <PageNavigation>{this.navigation()}</PageNavigation>

                        <div className='HowTo-rightSection'>
                            {activeIndex === 0 && <AddJavaScript />}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};

export default HowTo;