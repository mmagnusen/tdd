import React, { Component } from 'react';
import { copy } from 'clipboard-copy';
import classNames from 'classnames';
import './CopyToClipboard.scss';

class CopyToClipboard extends Component {
    state = {
        copied: false
    }

    copyText = () => {
        this.setState({ copied: true }, () => setTimeout(this.resetCopy, 800))
    }

    resetCopy = () => {
        this.setState({ copied: false })
    }

    render() {
        const { children } = this.props;
        const { copied } = this.state;

        return (
            <div className='CopyToClipboard'>
                <div className='CopyToClipboard-copyIconContainer'>
                    {!copied ? <i className={classNames("fas",  "fa-copy",  "tooltip", { copied })} onClick={this.copyText} /> :<p>copied!</p>}
                </div>
                <div className='CopyToClipboard-children'>
                    {children}
                </div>
            </div>
        )}
}

export default CopyToClipboard;