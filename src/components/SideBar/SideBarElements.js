import styled from "styled-components";
import { FaTimes } from "react-icons/fa"
import { NavLink as Link } from "react-router-dom"
import { Colors } from "../../Themes/ThemeOne";

export const Overlay = styled.div`
    width: 300vw;
    height: 300vh;
    z-index: -100;
    background-color: #000;
    opacity: 25%;
    position: absolute;
`

export const SideBarContainer = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 999;
    width: 60%;
    height: 100%;
    background-color: ${Colors.onsurface};
    display:grid;
    align-items: center;
    top: 0;
    left: 0;
    transition:0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "100%" : "0%")};
    left: ${({ isOpen}) => (isOpen ? "0" : "-300%")}; 
`;
 
export const CloseIcon = styled(FaTimes)`
    color: ${Colors.onsurface};   
    font-weight: light; 
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    font-size: 2rem;
    
    cursor: pointer;
    outline: none;
`;

export const Logo = styled.img`
     position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    outline: none;
`

export const SideBarWrapper = styled.div`
    color: #000;
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding-top: 10rem
    
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template: 1fr;
    grid-template-rows:  repeat(6, 80px);
    text-align: left;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SideBarLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: left;
    font-size: 1.5rem;
    font-family: "fleshandblood";
    font-weight: ligt;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${Colors.onsurface};
    cursor: pointer;

    &:hover {
        color: ${Colors.purple};
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarRoute = styled(Link)`
    border-radius: 0px;
    background: transparent;
    color: white;
    border: 1px solid white;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${Colors.purple};
        color: black;
        font-weight: bold;
    }
`;

export const SideBarbtnLink = styled.button`
    white-space: nowrap;
    padding: 10px 22px;
    margin: 1rem;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    outline: none;
    border: 2px solid #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background-color: ${Colors.purple};
        color: black;
        
    }
`;

export const SideBarLinkConnected = styled.button`
    white-space: nowrap;
    padding: 10px 22px;
    margin: 1rem;
    color: ${Colors.purple};
    font-weight: bold;
    font-size: 20px;
    outline: none;
    border: 2px solid #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

`