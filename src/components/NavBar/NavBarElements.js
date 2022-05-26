import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"

export const Nav = styled.nav`
    background: #fff;
    height: 100px;
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
    color: #000;
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
    

    &.active {
        opacity: 1;
    }
`

export const Bars = styled(BiMenuAltLeft)`
    color:#000;
`

export const BarsWrapper = styled.div`
        display: none;
        color: #000;

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
    flex: 2;
    align-items: center;
    
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
        color: #000;
        border: 1px solid #000;
    }
`

export const NavLogoLink = styled(Link)`
    color: #000;
    justify-self: center;
    justify-content: center;
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

    }
    
    `;
export const NavLogo = styled.img`
        height: 90px;
        width: 90px;

    @media screen and (max-width: 768px){
        height: 48px;
        width: 48px;
        
    }
`
    
