import React, { Component } from 'react';
import AssignmentOperator from './AssignmentOperator';
import ComparisonOperator from './ComparisonOperator';
import Introduction from './Introduction';
import LogicalOperator from './LogicalOperator';
import MathsOperator from './MathsOperator';

class Operators extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'introduction': 'Introduction',
            'assignment-operator': 'Assignment Operator',
            'comparison-operator': 'Comparison Operator',
            'logical-operator': 'Logical Operator',
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>Operators: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }
    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <Introduction />}
                {activeChapter.activeIndex === 1 && <AssignmentOperator />}
                {activeChapter.activeIndex === 2 && <ComparisonOperator />}
                {activeChapter.activeIndex === 3 && <LogicalOperator />}
                {activeChapter.activeIndex === 4 && <MathsOperator />}
            </div>
        )
    }   
}

export default Operators;