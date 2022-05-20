import React from 'react'
import logo from "../../images/logobg.png"
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
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/gallery" activeStyle>
          Gallery
        </NavLink>
        <NavLink to="/wallet" activeStyle>
          Wallet
        </NavLink>
        {/* {!walletAddress ? 
          <NavbtnLink onClick = {connectWallet}>CONNECT WALLET</NavbtnLink> : 
          <NavbtnLinkConnected > WALLET CONNECTED</NavbtnLinkConnected>} */}
      </NavMenu>
    </Nav>
    
    </>
  )
}

export default NavBar