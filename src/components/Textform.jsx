import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick2 = () => {
    let ltext = text.toLocaleLowerCase();
    setText(ltext);
  };

  const handleUpClick3 = () => {
    if (!text) return '';
    let stext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(stext);
  };

  const handleUpClick4 = () => {
    let ctext = '';
    setText(ctext);
  };

  const handleUpClick5 = ()=>{
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select() ;
    navigator.clipboard.writeText(text.value) ;
  }
  const handleUpClick6 =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}


  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
            placeholder="Enter Text Here"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick2}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick3}>
          Convert to Sentence Case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick4}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick5}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick6}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
      </div>
    </>
  );
}
