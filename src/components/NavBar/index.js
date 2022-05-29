import React from 'react'
import logo from "../../images/logo-inv-v2.png"
import { connectWallet } from '../../utils/web3Functions'
import {Nav, NavLink, Bars, NavMenu, NavLogo, NavLogoLink,BarsWrapper, WalletAddress, WalletWrapper, NavBtn, NavBtnLink} from "./NavBarElements"

function NavBar({ toggle, walletAddress, setWalletAddress}) {
  
  return (
    <>
    <Nav>
      <BarsWrapper>
        <Bars onClick={toggle} />
      </BarsWrapper>
      <NavLogoLink to= "/">
        <NavLogo src={logo} alt="" />
      </NavLogoLink>
      <NavMenu>
        <NavLink href="#home" >
          Home
        </NavLink>
        <NavLink href="#gallery" >
          Gallery
        </NavLink>
        <WalletWrapper>
        {!walletAddress ? 
          <NavLink onClick = {connectWallet}>Connect Wallet</NavLink> : 
          <NavLink style={{paddingTop:"1.8rem"}} >Wallet Connected</NavLink>}
        {walletAddress && <WalletAddress>{walletAddress.slice(0,5)} ... {walletAddress.slice(-5)}</WalletAddress>}
        </WalletWrapper>
         <NavBtnLink href="#mint">
          Mint Now
        </NavBtnLink>
        
      </NavMenu>
    </Nav>
    
    </>
  )
}

export default NavBar