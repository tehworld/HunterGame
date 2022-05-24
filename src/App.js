import GlobalStyle from "./Themes/globalStyles"
import React, {useEffect, useState} from "react";
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
import MintingArea from "./components/MintingArea";
import "./app.css"
import {smartContractAbi} from "./utils/smartContractAbi"
import {smartContractAddress} from "./utils/smartContractAddress"
import {checkIfWalletIsConnected} from "./utils/web3Functions"

function App() {

  let [walletAddress, setWalletAddress] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected(setWalletAddress);
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  },[]);


const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`01/06/${year}`) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      dy: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

  //  let daysHoursMinSecs = calculateTimeLeft()


  
  const daysHoursMinSecs = {dy:6, hours:1, minutes:20, seconds:40}
  
  return (
   <>
   <GlobalStyle />
   <Router>
      <SideBar isOpen={isOpen} toggle={toggle} walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
      <NavBar  toggle={toggle}  walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
      <HeroSection />
      <BackStory />
      <Gallery id="gallery" />
      <MintingArea />
      <MediaQuery maxDeviceWidth={768} >
        <RoadMapMobile daysHoursMinSecs={daysHoursMinSecs} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768} >
        <RoadMap daysHoursMinSecs={daysHoursMinSecs} />
      </MediaQuery>

      <FAQ />
      <Footer />
   </Router>
   </>
  );
}

export default App;
