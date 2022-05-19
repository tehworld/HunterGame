import React from 'react'
import logosm from "../../images/logosm.png"
import {Overlay, SideBarContainer, Icon, CloseIcon,
  SideBarWrapper, SideBarMenu,SideBarLink,
  SideBtnWrap, SideBarbtnLink, SideBarLinkConnected, SideBarGlobalWrapper, Logo } from './SideBarElements'


function SideBar({isOpen, toggle, walletAddress, setWalletAddress}) {

  return (
    
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Overlay></Overlay>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Logo src={logosm}/>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/home" onClick={toggle}>
                        Home
                        </SideBarLink>
                    <SideBarLink to="/gallery" onClick={toggle}>
                        Gallery
                        </SideBarLink>
                    <SideBarLink to="/wallet" onClick={toggle}>
                        Wallet
                        </SideBarLink>
                </SideBarMenu>
                {/* <SideBtnWrap>
                {!walletAddress ? 
                <SideBarbtnLink onClick = {connectWallet}>CONNECT WALLET</SideBarbtnLink> : 
                <SideBarLinkConnected > WALLET CONNECTED</SideBarLinkConnected>}
                </SideBtnWrap> */}
                
            </SideBarWrapper>
        </SideBarContainer>
        
    
    )
}

export default SideBar