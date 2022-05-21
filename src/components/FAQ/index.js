import React, {useState} from 'react'
import {faqData} from "../../data/faqData"
import {HiChevronDown, HiChevronUp} from "react-icons/hi"
import {AccordionWrapper, Accordion, AccordionItem, 
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
        <Accordion>
          {faqData.map((item, index) => (
            <AccordionItem>
              <AccordionTitleWrapper onClick={()=>toggleQuestion(index)}>

              <AccordionTitle >{item.question}</AccordionTitle>
              <AccordionIcon>{selected === index ? <HiChevronUp/> : <HiChevronDown/>}</AccordionIcon>
              </AccordionTitleWrapper>
              {selected ===  index ? <AccordionContent selected={selected}>{item.answer}</AccordionContent> : null}
              
            </AccordionItem>
          ))}
        </Accordion>
      </AccordionWrapper>
    
    </>
  )
}

export default FAQ