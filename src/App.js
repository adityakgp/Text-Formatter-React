import "./App.css";
// import About from "./Components/About";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [changethemetext, setchangethemetext] = useState('Enable Red Mode')
  const [alert, setalert] = useState(null)
  const showalert =(message,type)=>{
      setalert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  const togglemode = ()=>{
    if(mode == 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#390a0a'
      setchangethemetext('Disable Red Mode')
      showalert('Red mode has been enabled','success')
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      setchangethemetext('Enable Red Mode')
      showalert('Red mode has been disabled','success')
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Formatter" firstnav="Home" mode={mode}  togglemode={togglemode} themetext={changethemetext} />
       <Alert alert={alert}/>
      <div className="container">
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About />                       always use exact path it is good habbit */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
        <Form heading="Enter your text to convert it" mode={mode} showalert={showalert} />
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
    </>
  );
}

export default App;
