import styled from "styled-components"
import {Colors} from "../../Themes/ThemeOne"
import HunterImageMobile from "../../images/heroImageMobile.png"
import HunterImageDesktop from "../../images/heroImageDesktop.png"

export const HeroContainer = styled.div`
    height: auto;
    width: 100%;
    min-height: 780px;
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

    @media screen and (max-width: 2100px){
        height: auto;
        width: 100%;
        min-height: 680px;
        
    }
    

    @media screen and (max-width: 2000px){
        min-height: 650px;
        
    }

    @media screen and (max-width: 1800px){
        min-height: 600px;
        
    }

    @media screen and (max-width: 1800px){
        min-height: 550px;
        
    }

    @media screen and (max-width: 1500px){
        min-height: 500px;

    }

    @media screen and (max-width: 1300px){
        min-height: 450px;

    }

    @media screen and (max-width: 1200px){
        min-height: 400px;
        padding-top: 1.5rem;

    }

    @media screen and (max-width: 1100px){
        min-height: 350px;
        padding-top: 1.5rem;

    }

    @media screen and (max-width: 1000px){
        min-height: 330px;
        padding-top: 0;
    
    }

    @media screen and (max-width: 900px){
        min-height: 300px;
        padding-top: 0;
        margin-top: 0;
    
    }

    @media screen and (max-width: 768px){
        background-image: url(${HunterImageMobile});
        height: auto;
        width: 100%;
        min-height: 550px;
        padding-top: 200px;
        align-items: flex-end;

}


    @media screen and (max-width: 690px){
        background-image: url(${HunterImageMobile});
        height: auto;
        width: 100%;
        min-height: 500px;

}

    @media screen and (max-width: 590px){
        background-image: url(${HunterImageMobile});
        height: auto;
        width: 100%;
        min-height: 410px;

}

@media screen and (max-width: 530px){
        background-image: url(${HunterImageMobile});
        height: auto;
        width: 100%;
        min-height: 320px;

}

@media screen and (max-width: 480px){
        background-image: url(${HunterImageMobile});
        height: auto;
        width: 100%;
        padding-top: 0px;
        min-height: 450px;
    

}

@media screen and (max-width: 400px){
    height: auto;
    width: 100%;
    padding-top: 0px;
    min-height: 400px;
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