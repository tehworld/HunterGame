import styled from "styled-components"
import countdownBackground from "../../images/progress-bg.png"
import timerCardBg from "../../images/timer-card-bg.png"

export const RoadMapContainer = styled.div`
    
    background-image: url(${countdownBackground});
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
`


export const RoadMapImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-color: transparent;
`

export const TimerWrapper = styled.div`
    margin-top: -3rem;
    padding-top: 3rem;

    @media screen and (max-width: 1800px){
        
    }

    @media screen and (max-width: 1600px){
        
    }
    @media screen and (max-width: 1400px){
        
    }

    @media screen and (max-width: 1400px){
        font-size: 24px;
    }
`

export const Subtitle = styled.h2`
    color: white;
    padding-bottom: 5rem;
    font-family: "hiragino-light";
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;
    margin-bottom: 3.5rem;
    
`

export const RoadMapStagesWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 2500px){
        margin-top: -3.5rem;
    }

    @media screen and (max-width: 2300px){
        margin-top: -4rem;
    }

    @media screen and (max-width: 2100px){
        margin-top: -5.5rem;
    }

    @media screen and (max-width: 1800px){
        margin-top: -6rem;
    }

    @media screen and (max-width: 1600px){
        margin-top: -7rem;
    }
    @media screen and (max-width: 1400px){
        margin-top: -5rem;
    }

    @media screen and (max-width: 1200px){
        margin-top: -5.5rem;
    }
    @media screen and (max-width: 900px){
        margin-top: -6.5rem;
    }



   
`

export const RoadMapCardContainer = styled.div`
    display: flex;
    color: white;
    font-family: "hiragino-light";
    opacity: 0.8;
    font-size: 1vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1vw;
    padding-bottom: 4vw;
 
`

export const StageCardWrapper = styled.div`
    background-image: url(${countdownBackground});
    background-repeat: no-repeat;
    color: white;
    text-align: center;
    font-family: "hiragino-light";
    font-weight: 300;
    opacity: 0.95;
    padding: 2vw 4.5vw;
    font-size: 1vw;
    line-height: 1.2vw;
`