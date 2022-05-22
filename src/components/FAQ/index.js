import React, {useState} from 'react'
import {faqData} from "../../data/faqData"
import {HiChevronDown, HiChevronUp} from "react-icons/hi"
import {AccordionWrapper, Title, Accordion, AccordionItem, 
  AccordionTitle, AccordionContent,AccordionTitleWrapper, AccordionIcon} from "./FAQElements"

function FAQ() {
const [selected, setSelected] = useState(null)

  const toggleQuestion = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }

  return (
    <>
      <AccordionWrapper>
        <Title>FAQs</Title>
        <Accordion>
          {faqData.map((item, index) => (
            <AccordionItem selected={selected} index={index}>
              <AccordionTitleWrapper onClick={()=>toggleQuestion(index)}>
              <AccordionTitle >{item.question}</AccordionTitle>
              <AccordionIcon>{selected === index ? <HiChevronUp/> : <HiChevronDown/>}</AccordionIcon>
              </AccordionTitleWrapper>
              <AccordionContent selected={selected} index={index} dangerouslySetInnerHTML={ {__html: item.answer}}></AccordionContent>
              
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionWrapper>
    
    </>
  )
}

export default FAQ