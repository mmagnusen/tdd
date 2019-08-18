import React, { Component } from 'react';
import { CodeBlock, GlobalLayout } from '../'

class Gist extends Component {
    render() {
        return (
            <GlobalLayout>

            <CodeBlock>
            {
        `
let hello = 'marilyn';
    my name is marilyn;`
        }
            </CodeBlock>
            </GlobalLayout>
        )
    }
}

export default Gist;