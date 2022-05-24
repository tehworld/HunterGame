import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"

export const ProgressBarContainer = styled.div`
    height: 40px;
    width: 100%;
    background-color: rgba(87, 226, 173, 0.1);
    border-radius: 0;
    margin: 50;
    border: 2px solid rgba(247, 247, 247, 0.4);
    backdrop-filter: blur(14px);

    @media screen and (max-width:1100px){
        height: 24px;
    }

`

export const ProgressBarInside = styled.div`
    height: 100%;
    width: ${({value})=> `${value}%`};
    background-color: ${Colors.primary};
    border-radius: inherit;
    text-align: right;
`