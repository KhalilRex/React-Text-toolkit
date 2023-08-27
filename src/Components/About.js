import React, { useState } from 'react'

export default function About(props) {



  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: 'DarkSlateGray'

  })
  const [btntext, setBtnText] = useState('Enable Light model')
  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      })
      setBtnText('Enable Dark Mode')

    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'DarkSlateGray',
        border: '2px white solid'
      })
      setBtnText('Enable Dark Mode')
    }
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className='my-3'>About</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              About
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
             This app is create with react js with bootstrap, having fautures of text wrapping, case changing,dark mode 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              How to use
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              It is easy to use, it can change case of your text and much more. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Contact
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              <strong>khalilry3951@gmail.com.</strong> <br></br> Phone : +923116093809
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary mx-2 my-3" onClick={toggleStyle} >{btntext}</button>
      </div>
    </div>
  )
}
