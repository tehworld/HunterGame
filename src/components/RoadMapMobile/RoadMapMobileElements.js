import styled from "styled-components"
import countdownBackground from "../../images/progress-bg.png"

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 375px;
`

export const RoadMapCardContainerMobile = styled.div`
    display: flex;
    color: white;
    font-family: "hiragino-light";
    opacity: 0.8;
    font-size: 3vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1vw;
    padding-bottom: 4vw;
    text-align: center;
 
`

export const StageCardWrapperMobile = styled.div`
    background-image: url(${countdownBackground});
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    font-family: "hiragino-light";
    font-weight: 300;
    opacity: 0.95;
    padding: 3vw 4.5vw;
    font-size: 3vw;
   
    height: 100%;
    
`