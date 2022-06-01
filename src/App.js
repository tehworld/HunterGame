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
import MintNFT from "./components/MintNFTArea";
import { parse } from "@ethersproject/transactions";

function App() {

  let [walletAddress, setWalletAddress] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [mintedNumber, setMintedNumber] = useState(0)
  

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

  //Month day year
  let difference = Date.parse(`06/06/${year} 00:00:00 GMT`) - Date.now();
  // console.log(new Date(Date.now()).toUTCString())
  // console.log(new Date (Date.parse(`06/06/${year} 00:00:00 GMT`)).toUTCString())

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      dy: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }}

    else {
      timeLeft = {
        dy: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }

  return timeLeft;
}

  let daysHoursMinSecs = calculateTimeLeft()


  
  //const daysHoursMinSecs = {dy:6, hours:1, minutes:20, seconds:40}
  
  return (
   <>
   <GlobalStyle />
   <Router>
      <SideBar isOpen={isOpen} toggle={toggle} walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
      <NavBar  toggle={toggle}  walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
      <HeroSection id="home"/>
      <BackStory />
      <MintNFT smartContractAbi={smartContractAbi} smartContractAddress={smartContractAddress} setMintedNumber={setMintedNumber} walletAddress={walletAddress} setWalletAddress={setWalletAddress}/>
      <Gallery id="gallery" />
      <MintingArea id= "mint" mintedNumber={mintedNumber}/>
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
