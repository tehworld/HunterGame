import styled from "styled-components";

export const StyledButton = styled.button`
    width: 19.5rem;
    height: 3rem;
    left: 38.25rem;
    top: 42rem;
    border-radius: 100px;
    margin-left:1.5rem; 
    font-family: 'hiragino-light';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #ffffff;
    background: ${({isLoading}) => (!isLoading ? "#000" : "transparent")};
    border: ${({isLoading}) =>(!isLoading ? "1px solid #57e2ad" : "0")};
    
    &:hover {
        cursor: pointer;
        background: #57e2ad;
        color: #000;
    }

    @media screen and (max-width: 1280px){
        width: 11.25rem;
        height: 2.75rem;
        
    }

    @media screen and (max-width: 850px){
        width: 11.25rem;
        height: 2.75rem;
    }`

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
    `

    export const Title = styled.h2`
    color: white;
    font-family: "fleshandblood";
    font-weight: lighter;
    font-size: 3vw;
    padding-top: 6vw;

    @media screen and (max-width:768px){
        font-size: 28px;
    }

    `

    export const MintingButtonContainer = styled.div` 
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-family:"hiragino-light";
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
        opacity: 1;
        border: 2px solid white;
        padding: 2.5rem 3rem;
    `

    export const NumberControlWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20vw;
        margin-bottom: 2rem;

        @media screen and (max-width: 1000px){
            width: 30vw;
        }
        @media screen and (max-width: 768px){
            width: 35vw;
        }
        @media screen and (max-width: 500px){
            width: 50vw;
        }
        
    `

    export const NumberControl = styled.button`
        font-family: "fleshandblood";
        font-size: 2rem;
        color: white;
        border: 1px #57e2ad solid;
        padding: 0.5rem 1.5rem;
        border-radius: 10px;
      
        background-color: transparent;

        &:hover {
        cursor: pointer;
        background: #57e2ad;
        color: #000;
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
