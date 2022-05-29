import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"
import {Colors} from "../../Themes/ThemeOne"

export const Nav = styled.nav`
    background: transparent;
    
    position: absolute;
    top: 0;
    left:0;
    height: 80px;
    width: 100vw;
    min-width: 375px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem ;
    z-index: 10;

    @media screen and (max-width: 768px){
        height: 60px;
        padding: 0.75rem;
        margin:0;
    }
`

export const NavLink = styled.a`
    color: #fff;
    font-family: "fleshandblood";
    font-size: 22px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    max-height: 2px;
    cursor: pointer;
    opacity: 0.75;
    
    &:hover {
        color: ${Colors.primary};
    }
`

export const Bars = styled(BiMenuAltLeft)`
    color:#fff;

    &:hover {
        color: ${Colors.primary};
    }
`

export const BarsWrapper = styled.div`
        display: none;
        color: #fff;

    @media screen and (max-width: 768px){
        display: flex;
        flex:1;
        justify-content: center;
        align-items: center;
        padding-right: 3rem;
        font-size: 2.5rem;
        font-weight: light;
        cursor: pointer;
        
    }
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
    align-items: center;
    padding-right:1rem;
    margin-right: 0.5rem;


    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    };
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #000;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff ;
        color: ${Colors.primary};
        border: 1px solid #000;
    }
`

export const NavLogoLink = styled(Link)`
    color: #fff;
    justify-self: center;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    flex:1;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 768px){
        flex:4;
        margin:0;
        padding-right:9rem;
        justify-content: center;

    }
    
    `;
export const NavLogo = styled.img`
        height: 70px;
        width: 70px;

    @media screen and (max-width: 768px){
        height: 48px;
        width: 48px;
        
    }
`
    
