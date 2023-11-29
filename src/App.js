import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
    setAlert({
       msg: message,
       type: type

    })
    setTimeout( ()=>{
      setAlert(null);
    }, 1500);
  }  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090b4a';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      
      {/* <Navbar  title="Textutils" aboutText="About Textutils"/> */}
      {/* <Navbar/> */}

    <Router>
      <Navbar  title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter your text to analyze" mode={mode}/> } />

      </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
