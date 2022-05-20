import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"

export const HeroContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;


    @media screen and (max-width: 768px){
    flex-direction: column;
    
       

}
`

export const HeroImageContainer = styled.div`
`
export const HeroImage = styled.img`
    width: 100vw;
    height: auto;
    object-fit: contain;

    @media screen and (max-width: 768px){
        margin: 0%;
    
}
`

export const H1Container = styled.div`
    position: absolute;
    right: 55%;
    top: 50%;
    margin-left: 5rem;

    @media screen and (max-width: 768px){
        position: fixed;
       
    }
`

export const HeroH1 = styled.h1`
    font-size: 4.5rem;
    color: ${Colors.surface};
    font-family: "fleshandblood";
    font-weight: 500;


    @media screen and (max-width: 768px){
    color: ${Colors.surface};
    font-family: "fleshandblood";
    font-size: 1.5rem;
    font-weight: lighter;
    width: 100%;

   
  
    
}
`