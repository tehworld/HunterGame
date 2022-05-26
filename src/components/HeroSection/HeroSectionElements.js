import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"
import HunterImageMobile from "../../images/heroImageMobile.png"
import HunterImageDesktop from "../../images/heroImageDesktop.png"

export const HeroContainer = styled.div`
    height: 100vh;
    width: auto;
    background-image: url(${HunterImageDesktop});
    background-size: 'contain';
    overflow: 'hidden';
    background-size: 100%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;

    @media screen and (max-width: 2000px){
        height: 80vh;
        
    }

    @media screen and (max-width: 1800px){
        height: 70vh;
        
    }

    @media screen and (max-width: 1500px){
        height: 60vh;

    }

    @media screen and (max-width: 1200px){
        height: 50vh;
        padding-top: 1.5rem;

    }

    @media screen and (max-width: 900px){
        height: 40vh;
        

    }


    @media screen and (max-width: 768px){
        background-image: url(${HunterImageMobile});
        height: 80vh;
        padding-top: 200px;
        align-items: flex-end;

}
@media screen and (max-width: 480px){
        background-image: url(${HunterImageMobile});
        height: 80vh;
        padding-top: 150px;
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