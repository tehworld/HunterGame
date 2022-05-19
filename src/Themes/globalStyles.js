import { createGlobalStyle } from "styled-components";
import fleshandblood from "../fonts/flesh-and-blood.ttf"
import hiragino from "../fonts/hiragino-kaku-gothic.otf"


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "fleshandblood";
    font-style: normal;
    src: url(${fleshandblood}) format("truetype");
    font-display: swap;
}
@font-face {
  font-family: "hiragino";
  font-style: normal;
  src: url(${hiragino}) format("opentype");
  font-display: swap;
}

    
  body {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: "hiragino", "fleshandblood", monospace, sans-serif;
    text-shadow: none;
    background-color: #000000;

    @media screen and (max-width: 850px){
      background-position: 25%;
    }
}



`
export default GlobalStyle;