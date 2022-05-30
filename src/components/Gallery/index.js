import React from 'react';
import { GalleryContainer, GalleryImage } from './GalleryElements';
import  {galleryDataLarge} from "../../data/galleryDataLarge.js"
import  {galleryDataMedium} from "../../data/galleryDataMedium"
import  {galleryDataSmall} from "../../data/galleryDataSmall.js"
import  {useMediaQuery} from "react-responsive";



function Gallery() {
  const isMobile = useMediaQuery({query: "(max-width: 768px)"})
  const isMediumScreen = useMediaQuery({query: "(max-width: 1500px)"})
  const isLargeScreen = useMediaQuery({query: "(min-width: 1500px)"})
  
  if (isMobile){
  return (
    
    <GalleryContainer id="gallery">
           {galleryDataSmall.map((image, index) => (
            <GalleryImage style={{gridTemplateColumns: "repeat(3, 1fr)"}} src={image.image} />
          ))}
      </GalleryContainer>)
      } else if (isMediumScreen){
        return(
          <GalleryContainer id="gallery">
          {galleryDataMedium.map((image, index) => (
            <GalleryImage src={image.image} /> 
          ))}
          </GalleryContainer>
          
        )}
        else if (isLargeScreen){
          return(
            <GalleryContainer id="gallery">
            {galleryDataLarge.map((image, index) => (
              <GalleryImage src={image.image} /> 
            ))}
            </GalleryContainer>
            
          )
        
      }
      
}

export default Gallery