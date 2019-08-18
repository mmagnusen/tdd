import React, { Fragment } from 'react';
import { CodeBlock, Helmet } from '../../../../components/';

const SeparateFile = () => (
    <Fragment>
        <Helmet 
            title='How to add JavaScript from a separate file'
            description='Learn how to add JavaScript from a seperate file'
        />
        <section className='white-content'>
            <h4>Adding JavaScript from a separate file</h4>
            <p>The better way is to put your JavaScript code inside a separate file, and link to it from your index file.</p>

            <p>Replace the code in <span className='variable'>index.html</span> with:</p>
            <CodeBlock>
            {
`
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Boilerplate Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="HTML Boilerplate Template">
    <meta name="author" content="Clearli">
    <link rel="stylesheet" href="styles.css">
    <script src="headJavaScript.js"></script>
</head>

<body>
    <p>Hello world!</p>

    <p>This is an HTML template</p>

    <p>Some more text here</p>
    
    <script src="mainJavaScript.js"></script>
</body>

</html>
`
        }
        </CodeBlock>
            <p>The link to the separate file can be put in the head (line 11) or the body (line 21) of the <span className='variable'>html.</span></p>
            <p>Our JavaScript code is contained within files called <span className='variable'>headJavaScript.js</span> and  <span className='variable'>mainJavaScript.js</span>so we provide the name and path to these files as the source of our scripts.</p>
        </section>
    </Fragment>
)

export default SeparateFile;