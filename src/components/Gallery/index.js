import React from 'react';
import { GalleryContainer, GalleryImage } from './GalleryElements';
import  {galleryDataLarge} from "../../data/galleryDataLarge.js"
import  {galleryDataMedium} from "../../data/galleryDataMedium"
import  {galleryDataSmall} from "../../data/galleryDataSmall.js"
import  {galleryDataXLarge} from "../../data/galleryDataXLarge.js"
import  {useMediaQuery} from "react-responsive";



function Gallery() {
  const isMobile = useMediaQuery({query: "(max-width: 768px)"})
  const isMediumScreen = useMediaQuery({query: "(max-width: 1400px)"})
  const isLargeScreen = useMediaQuery({query: "(max-width: 2100px)"})
  const isXLargeScreen = useMediaQuery({query: "(min-width: 2100px)"})
  
  if (isMobile){
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <GalleryContainer id="gallery">
           {galleryDataSmall.map((image, index) => (
            <GalleryImage style={{gridTemplateColumns: "repeat(3, 1fr)"}} src={image.image} />
          ))}
      </GalleryContainer>  
    </div>
    )
      } else if (isMediumScreen){
        return(
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <GalleryContainer id="gallery">
          {galleryDataMedium.map((image, index) => (
            <GalleryImage src={image.image} /> 
          ))}
          </GalleryContainer>
          </div>
        )}
        else if (isLargeScreen){
          return(
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <GalleryContainer id="gallery">
            {galleryDataLarge.map((image, index) => (
              <GalleryImage src={image.image} /> 
            ))}
            </GalleryContainer>
            </div>
          )
        
      }
      else if (isXLargeScreen){
        return(
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <GalleryContainer id="gallery">
          {galleryDataXLarge.map((image, index) => (
            <GalleryImage src={image.image} /> 
          ))}
          </GalleryContainer>
          </div>
        )
      
    }
      
}

export default Gallery