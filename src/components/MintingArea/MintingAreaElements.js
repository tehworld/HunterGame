import styled from "styled-components"

export const MintingContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 375px;
    justify-content: center;
    align-items: center;
    color: white;
   

   
`

export const Title = styled.h2`
    font-family: "fleshandblood";
    font-size: 3vw;
    font-weight: lighter;
    padding-top: 5rem;

    @media screen and (max-width:1100px){
        font-size: 28px;
        padding-top: 2rem;
    }
`

export const BatchesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1920px;
    padding-bottom: 5rem;
   

    @media screen and (max-width:1100px){
        flex-direction: column;
        padding-bottom: 1rem;
    }
`

export const BatchCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    padding-right: 8rem;
    width: 22vw;
    max-width: 305px;

    h3 {
        font-family: "hiragino-light";
        font-size: 24px;
        font-weight: lighter;
        text-align: center;

        @media screen and (max-width:1100px){
            font-size: 16px;
    }
    }

    @media screen and (max-width:1100px){
        width: 100%;
        padding-right: 0;
        margin-right: 0;
    }
`

export const MintButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;



    h4 {
        font-family: "hiragino-light";
        font-size: 34px;
        font-weight: lighter;

        @media screen and (max-width:1100px){
        font-size: 16px;
    }
    }

    
`

export const EthIcon = styled.img`
    max-width: 32px;
    max-height: 32px;
    padding-right: 1rem;
`