import React, { Component } from 'react';
import StringType from './StringType';
import Introduction from './Introduction';
import NumberType from './NumberType';
import BooleanType from './BooleanType';
import NullType from './NullType';
import UndefinedType from './UndefinedType';
import ObjectType from './ObjectType';
import ArrayType from './ArrayType';
import FunctionType from './FunctionType';

class DataTypes extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'introduction': 'Introduction',
            'string': 'String',
            'number': 'Number',
            'boolean': 'Boolean',
            'null': 'Null',
            'undefined': 'Undefined',
            'object': 'Object',
            'array': 'Array',
            'function': 'Function',
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>Data Types: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }

    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <Introduction />}
                {activeChapter.activeIndex === 1 && <StringType />}
                {activeChapter.activeIndex === 2 && <NumberType />}
                {activeChapter.activeIndex === 3 && <BooleanType />}
                {activeChapter.activeIndex === 4 && <NullType />}
                {activeChapter.activeIndex === 5 && <UndefinedType />}
                {activeChapter.activeIndex === 6 && <ObjectType />}
                {activeChapter.activeIndex === 7 && <ArrayType />}
                {activeChapter.activeIndex === 8 && <FunctionType />}
            </div>
        )
    }   
};

export default DataTypes;