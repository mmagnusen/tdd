import React, { Component } from 'react';
import Classnames from 'classnames';
import './CodeBlock.scss';

class  CodeBlock extends Component {

    getRows = () => {
 
        const { children } = this.props;
        const splitCodeRows = children.split(';');
        const splitWords = splitCodeRows.map((row) => {
            const wordsInRow = row.split(' ');
            //console.log('wordsInRow', wordsInRow);

            const wordsMap = wordsInRow.map(word => {
                const redWords = ['const', 'let', 'var', 'import', 'from', 'class', 'function', 'return', '='];
                const blueWords = ['true', 'false'];
                const shouldBeRed = redWords.includes(word.trim());
                const shouldBeBlue = blueWords.includes(word.trim());
                //console.log('shouldBeRed', shouldBeRed, typeof word, word)
                //console.log('test:', ["const", 'let', 'var', 'import', 'from', 'function', 'return'].includes(word.trim()), word)
                return (<span className={Classnames('word', {'red': shouldBeRed}, {'blue': shouldBeBlue})}>{word}</span>)
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