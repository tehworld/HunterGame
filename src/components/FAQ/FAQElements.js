import styled from "styled-components"

export const AccordionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "hiragino-light";
`

export const Accordion = styled.div`
    width: 500px;
`

export const AccordionItem = styled.div`
    background-color: black;
    margin-bottom: 5px;
    padding: 10px 20px;

`

export const AccordionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

export const AccordionTitle = styled.h2`
    color: white;

`

export const AccordionIcon = styled.div`
    color: white;
`

export const AccordionContent = styled.p`
    color: white;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0,1,0,1);
`