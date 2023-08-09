
import { useState } from 'react';
import './App.css';

import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode]=useState('dark');
  const [alert, setAlert]=useState(null);

  const showAlert = (message , type) => {
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
         setAlert(null)
     }, 3000);
  }
  const toggleMode = () => {
     if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'success')
     }
     else{
      setMode('dark')
      document.body.style.backgroundColor = '#483D8B'
      document.body.style.color = 'white';
      showAlert('dark mode has been enabled', 'success')

     }
  }
  return (
    <>
    <Navbar title="ChutoPack" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter Your Text Below"  alert={showAlert}/>
    <About />
    </div>

    </>
  );
}

export default App;
