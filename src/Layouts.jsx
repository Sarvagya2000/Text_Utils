import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


const Layouts = () => {
    const [mode, setmode] = useState('light');
    const [alert, setalert] = useState(null);

    const showAlert=(message, type)=>{
        setalert({
            msg:message,
            ty:type
        })
    }
    const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='grey';
        showAlert("Dark mode has been enabled","success")
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success")
      }
    } 
  return (
    <div>
       <Navbar title="Text_Utils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
      <div className="container my-5">
        <Textform heading="Enter the text to analyze below" mode={mode} />
        {/* <About mode={mode}/> */}
      </div>
    </div>
  )
}

export default Layouts
