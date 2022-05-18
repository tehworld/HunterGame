import styled from "styled-components"
import {NavLink as Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
    background: #fff;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    opacity: 0.5;

    &.active {
        opacity: 1;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0.75%;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;


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

export const NavLogo = styled(Link)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
    `;
    
