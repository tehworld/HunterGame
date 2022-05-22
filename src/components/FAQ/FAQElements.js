import styled from "styled-components"


export const AccordionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 375px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: "hiragino-light";
`

export const Title = styled.h2`
    color: white;
    font-family: "fleshandblood";
    font-size: 3vw;
    padding-top: 6vw;
`

export const Accordion = styled.div`
    width: 50vw;
`

export const AccordionItem = styled.div`
    background-color: black;
    margin-bottom: 0.5vw;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.08);
    border: ${({selected, index}) => (selected === index ? "1px #57e2ad solid" : "1px solid rgba(229, 229, 229, 0.1)")};

`

export const AccordionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
`

export const AccordionTitle = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 1.5vw;
    padding-bottom: 0;

`

export const AccordionIcon = styled.div`
    color: white;
`

export const AccordionContent = styled.div`
    color: white;
    font-size: 1vw;
    overflow: hidden;
    display: ${({selected, index}) => (selected === index ? "block": "none")};
    transition: all 0.2s ease-in-out;

`