import React, { Fragment } from 'react';
import { Table, Helmet } from '../../../../components/';

const Overview = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Basics Course'
            description="Want to learn Javascrip but don't know where to start? Our JavaScript basics course will teach you all the fundamentals from the very beginning. Start your journey with JavaScript now."
        />
        <section className='white-content'>
            <h4>Overview</h4>
            <p>This is a full overview of the JavaScript basics course, detailing what will be covered in each section:</p>
            <Table tableHead='Introduction'>
                <tr>
                    <td>1</td>
                    <td>Overview</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>What is JavaScript</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>What can you do with JavaScript</td>
                </tr>
            </Table>
            <Table tableHead='Basic Definitions'>
                <tr>
                    <td>4</td>
                    <td>Variables</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Console messages</td>
                </tr>
            </Table>
            <Table tableHead='Adding Javascript to a project'>
                <tr>
                    <td>6</td>
                    <td>With script tags</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Separate file</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Summary</td>
                </tr>
            </Table>
            <Table tableHead='Operators'>   
                <tr>
                    <td>9</td>
                    <td>Introduction</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Type inference</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Assignment operator</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Comparison operators</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Logical operators</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Maths operators</td>
                </tr>
            </Table>
            {/*
            <Table tableHead='Data Types'>
                <tr>
                    <td>13</td>
                    <td>String</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Number</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Boolean</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Array</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Function</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Undefined</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Null</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Objects</td>
                </tr>
            </Table>
        
            <Table tableHead='Classes'></Table>
            <Table tableHead='Conditionals'></Table>
            <Table tableHead='The DOM'></Table>
            */}
        </section>
    </Fragment>
);

export default Overview;