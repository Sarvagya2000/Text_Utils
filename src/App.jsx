import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Layouts from "./Layouts";

function App() {

  return (
    <>

     
      <HashRouter>
        <Routes>
          
          <Route path = '*' element = {<Layouts/>} />
          <Route path = '/About' element = {<About/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
