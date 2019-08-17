import React, { Component } from 'react';
import AssignmentOperator from './AssignmentOperator';
import ComparisonOperator from './ComparisonOperator';
import Introduction from './Introduction';
import LogicalOperator from './LogicalOperator';
import MathsOperator from './MathsOperator';
import TypeInference from './TypeInference';

class Operators extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'introduction': 'Introduction',
            'type-inference': 'Type inference',
            'assignment-operator': 'Assignment Operator',
            'comparison-operator': 'Comparison Operators',
            'logical-operator': 'Logical Operators',
            'maths-operator': 'Maths Operators',
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
                {activeChapter.activeIndex === 1 && <TypeInference />}
                {activeChapter.activeIndex === 2 && <AssignmentOperator />}
                {activeChapter.activeIndex === 3 && <ComparisonOperator />}
                {activeChapter.activeIndex === 4 && <LogicalOperator />}
                {activeChapter.activeIndex === 5 && <MathsOperator />}
            </div>
        )
    }   
}

export default Operators;