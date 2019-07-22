import React, { Component } from 'react';
import { Link } from '../';
import './Footer.scss';
import { LINK_TYPE } from '../../constants';

class Footer extends Component {
    render() {
        return (
            <footer className='Footer'>
                <div className='container'>
                    <ul>
                        <h4>Jest</h4>
                        <li><Link to='/jest' type={LINK_TYPE.INTERNAL}>What is Jest?</Link></li>
                        <li><Link to='/jest' type={LINK_TYPE.INTERNAL}>Snapshot tests</Link></li>
                        <li><Link to='/jest' type={LINK_TYPE.INTERNAL}>Writing tests</Link></li>
                    </ul>
                    {/*}
                        <ul>
                        <h4> Selenium</h4>
                            <li><Link to='/selenium' type={LINK_TYPE.INTERNAL}>What is Selenium?</Link></li>
                            <li><Link to='/selenium' type={LINK_TYPE.INTERNAL}>Selenium and React</Link></li>
                        </ul>
                    */}
                    <ul>
                        <h4>Resources</h4>
                        <li><Link to='/resources' type={LINK_TYPE.INTERNAL}>General testing</Link></li>
                        <li><Link to='/resources' type={LINK_TYPE.INTERNAL}>Helpful for beginners</Link></li>
                        <li><Link to='/resources' type={LINK_TYPE.INTERNAL}>Jest</Link></li>
                        <li><Link to='/resources' type={LINK_TYPE.INTERNAL}>Selenium</Link></li>
                        <li><Link to='/resources' type={LINK_TYPE.INTERNAL}>Git repositories</Link></li>
                    </ul>
                    <ul>
                        <h4>How To Guides</h4>
                        <li><Link to='/how-to' type={LINK_TYPE.INTERNAL}>Add JavaScript to project</Link></li>
                        <li><Link to='/how-to' type={LINK_TYPE.INTERNAL}>Add Sass to project</Link></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;
