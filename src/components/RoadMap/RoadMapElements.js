import styled from "styled-components"
import countdownBackground from "../../images/countdown-background.png"

export const RoadMapContainer = styled.div`
    
    background-image: url(${countdownBackground});
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RoadMapImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
    background-color: transparent;
`