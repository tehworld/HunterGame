import styled from "styled-components"

export const GalleryContainer = styled.div`
    padding-top: 5rem;
    margin: 1rem;
    width: 100%;
    height: auto;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    @media screen and (max-width:768px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (min-width:1500px){
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`


export const GalleryImage = styled.img`
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    max-width: 130px;
    max-height: 130px;

    object-fit: cover;

    @media screen and (max-width:768px){
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width:1500px){
        width: 200px;
        height: 200px;
    }
`