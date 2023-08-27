import React, { useState } from 'react'
import '../App.css';

export default function MorseCode(props) {
    const charToMorse = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
        'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', ' ': '/'
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
        setMorseCode(textToMorse(setText))

    }

    const textToMorse = () => {
        return text.toUpperCase().split('').map(char => charToMorse[char] || char).join(' ');
    }

    const [text, setText] = useState("");
    const [moreseCode, setMorseCode] = useState("")

    return (

        <>
            <div className="container">
                <label htmlFor="myBox" className="form-label" style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <div className="container">
                    <button
                        disabled={text.length === 0}
                        className="custom-btn danger-btn mx-2 my-1"
                        onClick={(e)=>setText('')}
                    >
                        Clear All
                    </button>
                </div>

            </div>
            <div className="container my-3">
                <h3>Morse Code</h3>
                <p>{text.length > 0 ? moreseCode : "Type Something in Text Area"}</p>
            </div>
            
        </>
    )
}
