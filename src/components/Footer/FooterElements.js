import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"

export const FooterContainer = styled.footer`
    background-color: rgba(255, 255, 255, 0.08);
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    
`;
export const FooterLogoWrapper = styled.div`

`
export const FooterLogo = styled.img`
    max-width: 3vw ;
    max-height: 3vw;

    @media screen and (max-width: 768px){
        max-width: 2.5vw ;
        max-height: 2.5vw;
        margin-top: 1vw;
    }
`

export const FooterLegalWrapper = styled.div`

`

export const FooterLegal = styled.div`
    color: ${Colors.secondary2};
    font-family: "hiragino-light";
    font-size: 1vw;

    @media screen and (max-width: 768px){
        font-size: 0.8vw;
        padding-bottom: 1vw;
        margin-bottom: 1vw;
    }
`
