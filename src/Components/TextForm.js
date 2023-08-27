import React, { useState } from 'react'
import '../App.css';

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log('Compozing ....' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.alert('converted to Upper text', 'primary')
    }
    const handleOnChange = (event) => {
        console.log('On Change.')
        setText(event.target.value)

    }
    const handleDownClick = () => {
        let sText = text.toLowerCase();
        setText(sText)
        props.alert('converted to Lower text', 'primary')
    }
    const handleOnClear = () => {
        setText('')
        props.alert('Text field is cleaned', 'primary')
    }

    const handleOnJustify = () => {
        // let justifiedText = text.replace(/\s+/g, ' '); // replace multiple spaces with single space
        // justifiedText = justifiedText.split(' ').join('%/%'); // add separator 
        // justifiedText = justifiedText.replace(/\n/g, '%/%'); // replace newlines with separator
        // justifiedText = justifiedText.split('%/%').join('\n'); // add newlines
        // setText(justifiedText);
        const trimmedText = text.replace(/\s+/g, ' ').trim();
        setText(trimmedText);
        props.alert('Extra spaces removed', 'success');
    }

    const handleOnCopy = () => {
        const textarea = document.getElementById('myBox');
        textarea.select();
        document.execCommand('copy');
        props.alert('Text copied to clipboard', 'success');
    }

    const handleRemoveDuplicates = () => {
        const lines = text.split('\n');

        // Use a Set to keep track of unique lines
        const uniqueLines = new Set(lines);

        // Join the unique lines back into a string
        const deduplicatedText = Array.from(uniqueLines).join('\n');

        setText(deduplicatedText);
        props.alert('Duplicate lines removed', 'warning');
    };


    const [text, setText] = useState("");

    return (

        <>
            <div className="container">
                <label htmlFor="myBox" className="form-label" style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <div className="container">
                    <button
                        disabled={text.length === 0}
                        className="custom-btn primary-btn mx-2 my-1"
                        onClick={handleUpClick}
                    >
                        Convert to Upper Case
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="custom-btn success-btn mx-2 my-1"
                        onClick={handleDownClick}
                    >
                        Convert to Lower Case
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="custom-btn warning-btn mx-2 my-1"
                        onClick={handleOnCopy}
                    >
                        Copy Text
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="custom-btn infoo-btn mx-2 my-1"
                        onClick={handleOnJustify}
                    >
                        Remove Spaces
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="custom-btn light-btn mx-2 my-1"
                        onClick={handleRemoveDuplicates}
                    >
                        Remove Duplicate Lines
                    </button>
                    <button
                        disabled={text.length === 0}
                        className="custom-btn danger-btn mx-2 my-1"
                        onClick={handleOnClear}
                    >
                        Clear All
                    </button>
                </div>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.trim().split(/\s+/).length} Words and {text.length} Character</p>
                <p>{0.008 * text.split(' ').length} Mins to read</p>
            </div>
            

        </>
    )
}
