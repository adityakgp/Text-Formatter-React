import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form(props) {
  const upperCase = () => {
    // console.log('upper case was clicked' + text);
    // setText('you have clicked on upper case')
    let newuppercase = text.toUpperCase();
    setText(newuppercase);
    props.showalert('Text Converted to upper case','success')
  };
  const handleOnChange = (event) => {
    // console.log('on change');
    setText(event.target.value);
  };
  const lowerCase = () => {
    let newlowercase = text.toLowerCase();
    setText(newlowercase);
    props.showalert('Text Converted to lower case','success')
  };
  const alphaorder = () =>{
    const newalphaorder=text.split(' ');
    newalphaorder.sort();
   setText(newalphaorder.toString());
   props.showalert('Text orderd alphabetically','success')
  }
  const cleartext = ()=>{
   let erase=('')
    setText(erase);
    props.showalert('Text cleared','warning')
  }
  const handleCopy = () => {
    var text = document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert('Text copied','success')
    }
    const handleExtraSpaces = () => {
      let newtext = text.split(/[ ]+/);
      setText(newtext.join(' '));
      props.showalert('Extra spaces removed','success')
      }
      const numwords=(text)=>{
        if(text.length >0){return text.trim().split(" ").length} else{return 0} 
      }
      
  const [text, setText] = useState("Enter your text here");
  return (
    <>
    <div  style={{color :props.mode==='dark'?'white':'black'}}>
    <div >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor :props.mode==='dark'?'#5f2a2a':'white' , color : props.mode==='dark'?'white':'black'}}
        ></textarea>
        <button className="btn btn-danger mx-1 my-2" onClick={upperCase}>
          Upper Case
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={lowerCase}>
          Lower Case
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={alphaorder}>
          Alphabetically 
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={cleartext}>
          Clear Text 
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleCopy}>
          Copy Text 
        </button>
        <button className="btn btn-danger mx-1 my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
    </div>
    <div className="container"> <h2> Your text has </h2>
    <p>{text.length} characters   &  {numwords(text)} words</p>
    <p>Reading time for your text is {0.008*text.split(' ').length} minutes</p>
    <h3>Preview</h3>
    <p>{text.length===0?'To preview enter some text in the above text box' : text}</p>
    </div>
    </div>
    </>
  );
}
