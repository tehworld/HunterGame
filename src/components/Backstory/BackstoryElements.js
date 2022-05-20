import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"

export const BackstoryContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: start;
    }
`

export const TitleWrapper = styled.div`
    margin: 5vw 5vw 5vw 12vw;
    max-width: 446px;
    flex:1;

    @media screen and (max-width: 768px){
        margin: 1vw 5vw 0 2vw;
        padding-left: 2vw;
        
    }
`

export const SmallText = styled.p`
    font-family: "hiragino-light";
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.primary};
    letter-spacing: 0.1rem;
    margin-bottom: 0;
    
`

export const Title = styled.h2`
    font-family: "fleshandblood";
    font-weight: 500;
    font-size: 56px;
    line-height: 80px;
    color: ${Colors.surface};
    margin-top:0;

    @media screen and (max-width: 768px){
        font-size: 22px;
        line-height: 32px;
        
        
    }
`

export const TextWrapper = styled.div`
    margin: 5vw 12vw 5vw 5vw;
    max-width: 810px;
    flex:2;

    @media screen and (max-width: 768px){
        margin: 4vw 5vw 0 4vw;
        min-width: 327px;
        text-align: left;
        
    }

`



export const Text = styled.p`
    font-family: "hiragino-light";
    font-weight: lighter;
    font-size: 20px;
    line-height: 32px;
    color: ${Colors.surface};
    opacity: 0.8;

    @media screen and (max-width: 768px){
        font-size: 14px;
        
    }

`