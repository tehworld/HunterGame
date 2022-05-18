import GlobalStyle from "./Themes/globalStyles"
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router} from "react-router-dom"


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
   <>
   <GlobalStyle />
   <Router>
     <NavBar  toggle={toggle}/>
   </Router>
   </>
  );
}

export default App;
