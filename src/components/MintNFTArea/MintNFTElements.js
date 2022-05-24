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
    background: ${({isLoading}) => (!isLoading ? "#57e2ad" : "transparent")};
    border: ${({isLoading}) =>(!isLoading ? "1px solid ##57e2ad" : "0")};
    &:hover {
        cursor: pointer;
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
    `

    export const MintingImageWrapper = styled.div`
    
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

