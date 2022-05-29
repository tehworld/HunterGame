import React from 'react'
import logo from "../../images/logo-inv-v2.png"
import { connectWallet } from '../../utils/web3Functions'
import {Nav, NavLink, Bars, NavMenu, NavLogo, NavLogoLink,BarsWrapper, NavBtn, NavBtnLink} from "./NavBarElements"

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
        {/* <NavLink onClick={connectWallet}>
          Wallet
        </NavLink> */}
        {!walletAddress ? 
          <NavLink onClick = {connectWallet}>Connect Wallet</NavLink> : 
          <NavLink >Wallet Connected</NavLink>}
      </NavMenu>
    </Nav>
    
    </>
  )
}

export default NavBar