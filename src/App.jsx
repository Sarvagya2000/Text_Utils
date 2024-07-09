import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      ty: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text_Utils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={ <About mode={mode} />}/>
             

            <Route path="/" element={ <Textform
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />} />
             
          </Routes>

          {/* <About mode={mode}/> */}
        </div>
      </Router>
    </>
  );
};

export default App;
