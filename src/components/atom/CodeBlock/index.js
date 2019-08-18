import React, { Component } from 'react';
import Classnames from 'classnames';
import './CodeBlock.scss';

class  CodeBlock extends Component {

    getRows = () => {
        const { children } = this.props;
        let codeBlockIndent = 0;
        const splitCodeRows = children.split("\n");
        splitCodeRows.shift(); //removes first empty line in code

        const splitWords = splitCodeRows.map((row, rowNumber) => {

            const wordsInRow = row.split(' ');

            //find index of first item which is not a whitespace, we use the first line as the base
            if (rowNumber === 0) {

                const firstItemNotWhitespace = (word) => {
                    return word !== "";
                  }
                  codeBlockIndent = wordsInRow.findIndex(firstItemNotWhitespace)
            }

            //iterate through the row and remove each whitespace, up to the indent
            for (var i = 0; i < codeBlockIndent; i ++ ) {
                wordsInRow.shift();
            }

            const wordsMap = wordsInRow.map((word, wordIndex) => {
                const previousWord = wordsInRow[wordIndex - 1]
                const redWords = ['const', 'let', 'var', 'import', 'from', 'class', 'function', 'return', '='];
                const blueWords = ['true', 'false'];
                const greyWords = ['//'];
                const purpleWords = [];

                const shouldBeRed = redWords.includes(word.trim());
                const shouldBeBlue = blueWords.includes(word.trim());
                const shouldBeGrey = greyWords.includes(word.trim()) || previousWord === '//';
                const shouldBePurple = purpleWords.includes(word.trim());
                return (<span className={Classnames('word', {'red': shouldBeRed}, {'blue': shouldBeBlue}, {'grey': shouldBeGrey}, {'purple': shouldBePurple})}>{word}</span>)
            });
            return wordsMap
        })

        return splitWords;
    }

    render() {
        const { fileName = 'index.js'  } = this.props;
        const rows = this.getRows()

        return (
            <div>
                <div className='CodeBlock'>
                    <div className='CodeBlock-fileName'>{fileName}</div>
                    <table>
                        <tbody>
                            {
                                rows && rows.map((row, index) => {
                                    //console.log('row', row);
                                    return (<tr>
                                        <td className='CodeBlock-lineNumber'>{index + 1}</td>
                                        <td>
                                            <pre>
                                                <code>{row}</code>
                                            </pre>
                                        </td>
                                        
                                    </tr>)
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }    
}

export default CodeBlock;