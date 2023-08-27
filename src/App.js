import { useState } from 'react';
import './App.css';
import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import "./index.css";
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router, // Import BrowserRouter with an alias
  Routes,
  Route,
} from "react-router-dom"; // Import the necessary components from react-router-dom
import TextToQRCode from './Components/TextToQRCode';
import MorseCode from './Components/MorseCode';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#483D8B';
      document.body.style.color = 'white';
      showAlert('Light mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black';
      showAlert('Dark mode has been enabled', 'success')
    }
  }

  return (
    <div>
      <Router>
        <Navbar title="ChutoPack" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Your Text Below" alert={showAlert} />} />
          <Route exact path="/about" element={<About heading="Enter Your Text Below" />} />
          <Route exact path="/qrcode" element={<TextToQRCode heading="Enter Your Text Below" />} />
          <Route exact path="/morsecode" element={<MorseCode heading="Enter Your Text Below" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
