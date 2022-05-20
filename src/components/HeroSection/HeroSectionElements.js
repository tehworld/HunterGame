import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"
import HunterImageMobile from "../../images/heroImageMobile.png"
import HunterImageDesktop from "../../images/heroImageDesktop.png"

export const HeroContainer = styled.div`
    height:100vh;
    width: auto;
    background-image: url(${HunterImageDesktop});
    background-size: 'contain';
    overflow: 'hidden';
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 1500px){
        height: 60vh;

    }

    @media screen and (max-width: 900px){
        height: 50vh;

    }


    @media screen and (max-width: 768px){
        background-image: url(${HunterImageMobile});
        height: 80vh;
     
        align-items: flex-end;

}

    @media screen and (max-width: 690px){
        background-image: url(${HunterImageMobile});
        height: 70vh;

}

    @media screen and (max-width: 590px){
        background-image: url(${HunterImageMobile});
        height: 60vh;

}

@media screen and (max-width: 500px){
        background-image: url(${HunterImageMobile});
        height: 50vh;

}
`


export const HeroH1 = styled.h1`
    font-size: 3.5rem;
    color: ${Colors.surface};
    font-family: "fleshandblood";
    font-weight: 500;
    margin-left: 10vw;

    @media screen and (max-width: 1500px){
        font-size: 2.5rem;
        margin-left: 7vw;

    }

    @media screen and (max-width: 900px){
        font-size: 2rem;
        margin-left: 5vw;

    }



    @media screen and (max-width: 768px){
    color: ${Colors.surface};
    font-family: "fleshandblood";
    font-size: 2rem;
    font-weight: lighter;
    width: 100%;
    padding-bottom: 15vw;
    
}
    @media screen and (max-width: 690px){
        padding-bottom: 8vw;

}

    @media screen and (max-width: 500px){
        font-size: 1.5rem;

}
`