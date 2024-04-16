import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleInputChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

  // take a sentence as input
  // reverse the input sentence
  // the start of the sentence must start with a capital
  // for javascript
// const reversedSentence = markdown.split(' ').reverse().join('');
// const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
// console.log(capitalizedSentence);

// const newSentence = "This is a new sentence.";
// const reversedNewSentence = newSentence.split(' ').reverse().join('');
// const capitalizedNewSentence = reversedNewSentence.charAt(0).toUpperCase() + reversedNewSentence.slice(1);
// console.log(capitalizedNewSentence);

// for all lines, use "quote  string wrapper instead of ' apos
const reversedSentence = markdown.split(" ").reverse().join("");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);
const newSentence = "This is a new sentence.";
const reversedNewSentence = newSentence.split(" ").reverse().join("");
const capitalizedNewSentence = reversedNewSentence.charAt(0).toUpperCase() + reversedNewSentence.slice(1);
console.log(capitalizedNewSentence);



const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];
// As an illustration, pull names out of the data array  
// const names = data.map(item => item.name);
// there's a mistake in the code. The map function is being applied to the outer array, so each item in the map function is actually an array of objects, not an individual object.
// Therefore, item.name is undefined, and the names array will be filled with undefined.
// To correctly extract the names, you would need to first flatten the array (i.e., convert it from an array of arrays to a single array) and then apply the map function.

  // Map through an array of arrays of objects
  // Example: Extract names from the data array
  // Desired outcome: ['John', 'Jane', 'Bob']  
  
// const names = data.flatMap(arr => arr.map(obj => obj.name));
// const names = data.flat().map(item => item.name);



