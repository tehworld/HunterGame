import styled from "styled-components";

export const StyledButton = styled.button`
    width: 19.5rem;
    height: 3rem;
    left: 38.25rem;
    top: 42rem;
    border-radius: 100px;
    font-family: 'hiragino-light';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #ffffff;
    background: ${({isLoading}) => (!isLoading ? "#000" : "transparent")};
    border: ${({isLoading}) =>(!isLoading ? "1px solid #57e2ad" : "0")};
    
    &:hover {
        cursor: pointer;
        background: #57e2ad;
        color: #000;
    }

    @media screen and (max-width: 1000px){
        width: 15rem;
        height: 2.75rem;
        font-size: 1rem;
    }

    @media screen and (max-width: 768px){
        width: 11.25rem;
        height: 2.75rem;
    }
`

    export const LoadingWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
       
    `

    export const MintingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 375px;
    margin:1rem;
    `

    export const Title = styled.h2`
    color: white;
    font-family: "fleshandblood";
    font-weight: lighter;
    font-size: 3vw;
    padding: 1rem 0 2rem 0;


    @media screen and (max-width:950px){
        font-size: 28px;
        padding: 1rem 0 0rem 0;
        margin-bottom: 0;
    }

    `

    export const MintingButtonContainer = styled.div` 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-family:"hiragino-light";
    `

    export const PriceContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0;
    `

    export const MintingImage = styled.img`
        display: inline-block;
        max-width: 520px;
        width: 100%;
        height: auto;
        max-height:320px;
        object-fit: cover;
            `
    export const MintNumber = styled.p`
        font-family: "fleshandBlood";
        font-size: 36px;
        color: white;
        margin: 0 3rem;
        opacity: 1;
        border: 2px solid white;
        padding: 1rem 2rem;

        @media screen and (max-width: 1000px){
        font-size: 24px;
        padding: 0.75rem 1.5rem;
        margin:2rem;
    }

    `
    export const PriceText = styled.h4`
        font-size: 32px;
        margin-top: 0;

        @media screen and (max-width: 1000px){
        font-size: 24px;
        
    }
    `

    export const NumberControlWrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;

        @media screen and (max-width: 1000px){
        margin-bottom: 0.5rem;
        
    }

        
    `

    export const NumberControl = styled.button`
        font-family: "fleshandblood";
        font-size: 2rem;
        color: white;
        border: 1px #57e2ad solid;
        padding: 1rem 2rem;
        border-radius: 10px;
      
        background-color: transparent;

        &:hover {
        cursor: pointer;
        background: #57e2ad;
        color: #000;
    }

    @media screen and (max-width: 1000px){
        font-size: 1.5rem;
        padding: 0.75rem 1.5rem;
    }

    `
export const SuccessTextWrapper = styled.div`
color : #57e2ad;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
opacity: 1;
font-family: 'hiragino-light';
font-style: normal;
font-weight: 400;
font-size: 24px;
margin: 0;
text-align: center;
padding-top: 1rem;

@media screen and (max-width:1280px){
    font-size: 12px;
    line-height: 12px;
    padding-top: 0;
    margin-top:0;
    
}

@media screen and (max-width: 850px){
    padding-top: 0;
    font-size: 12px;
    line-height: 8px;
}
`

export const OpenseaText = styled.p`
padding-left: 1rem;

@media screen and (max-width:1280px){
    padding-left: 1rem;
}
@media screen and (max-width:850px){
    padding-left:0;
}

`
