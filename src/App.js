import GlobalStyle from "./Themes/globalStyles"
import React, {useState} from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router} from "react-router-dom"
import SideBar from "./components/SideBar";
import HeroSection from "./components/HeroSection";
import BackStory from "./components/Backstory";
import Gallery from "./components/Gallery"
import RoadMap from "./components/RoadMap"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import  MediaQuery from "react-responsive";
import RoadMapMobile from "./components/RoadMapMobile";

function App() {

  let [walletAddress, setWalletAddress] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  
  return (
   <>
   <GlobalStyle />
   <Router>
   <SideBar isOpen={isOpen} toggle={toggle} walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
   <NavBar  toggle={toggle}  walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
   <HeroSection />
   <BackStory />
   <Gallery />
   <MediaQuery maxDeviceWidth={768} >
     <RoadMapMobile />
   </MediaQuery>
   <MediaQuery minDeviceWidth={768} >
     <RoadMap />
   </MediaQuery>

   
   
   <FAQ />
   <Footer />
   </Router>
   </>
  );
}

export default App;
