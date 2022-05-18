import React from 'react'
import logo from "../../images/logobg.png"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements"

function NavBar({ toggle, walletAddress, setWalletAddress}) {
  return (
    <>
    <Nav>
      <NavLink to= "/">
        <img src={logo} alt="" />
      </NavLink>
      <Bars onclick={toggle} />
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