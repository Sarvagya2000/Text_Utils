//import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212529';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="Text_Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <Textform heading="Enter the text to analyze below" />
        <About/>
      </div>
    </>
  );
}

export default App;
