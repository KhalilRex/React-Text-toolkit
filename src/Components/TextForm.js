import React,{ useState } from 'react'


export default function TextForm(props) {
    const charToMorse = {
        'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
        'F': '..-.', 'G': '--.',  'H': '....', 'I': '..',  'J': '.---',
        'K': '-.-',  'L': '.-..', 'M': '--',   'N': '-.',  'O': '---',
        'P': '.--.', 'Q': '--.-', 'R': '.-.',  'S': '...', 'T': '-',
        'U': '..-',  'V': '...-', 'W': '.--',  'X': '-..-', 'Y': '-.--',
        'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', ' ': '/'
    };
    
    const handleUpClick = () =>{
        console.log('Compozing ....' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.alert('converted to Upper text', 'primary')
    }
    const handleOnChange = (event) =>{
        console.log('On Change.')
        setText(event.target.value)
        setMorseCode(textToMorse(setText))
        
    }
    const handleDownClick = () => {
        let sText = text.toLowerCase();
        setText(sText)
        props.alert('converted to Lower text', 'primary')
    }
    const handleOnClear = () =>{
        setText('')
        props.alert('Safai Nisf Iman hai', 'primary')
    }
   const textToMorse = () =>{
    return text.toUpperCase().split('').map(char => charToMorse[char] ||char).join(' ');
   }
    const [text, setText] = useState("");
    const [moreseCode, setMorseCode] = useState("")
    
    return (

        <>
            <div className="container">
                <label htmlFor="myBox" className="form-label" style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.heading}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-success mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
                <button className="btn btn-danger mx-2" onClick={handleOnClear}> Clear all</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.trim().split(/\s+/).length } Words and {text.length} Character</p>
                <p>{0.008*text.split(' ').length} Mins to read</p>
                <h3>Morse Code</h3>
                <p>{moreseCode}</p>
            </div>

        </>
    )
}
