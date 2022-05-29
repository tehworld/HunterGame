import React from 'react'
import {BackstoryContainer, TitleWrapper, SmallText, Title, TextWrapper, Text} from "./BackstoryElements"

function BackStory() {
  return (
    <>
      <BackstoryContainer>
        <TitleWrapper>
          {/* <SmallText>OUR STORY</SmallText> */}
          <Title> WELCOME TO THE HUNTER GAME</Title>
        </TitleWrapper>
        <TextWrapper>
          <Text>The 10,000 Hunters are part of a collective entity tied to a common goal of forging a New World. 
            The individual who partisipates will partake in the creation of a completely decentralised and autonomous 
            perpetual community. Upon building, this Metaverse experiment will thrive, allowing inclusivity for others
            who may otherwise be excluded or marginalized.This is for everyone to engage in their role and to be united 
            in the core of the vision, to create a new decentralized world. 
          </Text>
          <Text>This New World will grow far beyond what any of us could have ever imagined, this New World will be 
            the new era of decentralized communities, bringing everyone closer to each other, this is the concept of life.
            Have faith in the power of collective decentralization, it is inevitable.</Text>
        </TextWrapper>
      </BackstoryContainer>
    
    </>
  )
}

export default BackStory