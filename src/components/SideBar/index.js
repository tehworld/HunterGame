import React from 'react'
import logosm from "../../images/logosm.png"
import { connectWallet } from '../../utils/web3Functions'
import {Overlay, SideBarContainer, Icon, CloseIcon,
  SideBarWrapper, SideBarMenu,SideBarLink,
  SideBtnWrap, SideBarbtnLink, SideBarLinkConnected, SideBarGlobalWrapper, WalletAddress, Logo } from './SideBarElements'


function SideBar({isOpen, toggle, walletAddress, setWalletAddress}) {

    const connectWalletHandler = () => {
        connectWallet(setWalletAddress)
      }

  return (
    
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Overlay></Overlay>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Logo src={logosm}/>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink href="#home" onClick={toggle}>
                        Home
                        </SideBarLink>
                    <SideBarLink href="#gallery" onClick={toggle}>
                        Gallery
                        </SideBarLink>
                    {/* <SideBarLink onClick={connectWallet}>
                        Wallet
                        </SideBarLink>*/}
                        {!walletAddress ? 
                <SideBarLink onClick = {connectWalletHandler}>Connect Wallet</SideBarLink> : 
                <SideBarLink > Wallet Connected</SideBarLink>}
                 {walletAddress && <WalletAddress>{walletAddress.slice(0,5)} ... {walletAddress.slice(-5)}</WalletAddress>}
                <SideBtnWrap>
                    <SideBarbtnLink href="#mint">
                    Mint
                    </SideBarbtnLink>
                </SideBtnWrap>

                </SideBarMenu> 
                
                
            </SideBarWrapper>
        </SideBarContainer>
        
    
    )
}

export default SideBar