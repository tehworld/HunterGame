import { createGlobalStyle } from "styled-components";
import {fleshAndBlood} from "../fonts/Fleshandblood-MVA5x.tff"
import {hiragino} from "../fonts/hiragino-kaku-gothic.otf"


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: Fleshandblood;
    src: url(${fleshAndBlood});

    font-family: hiragino;
    src: url(${hiragino});
  }
  body {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: "hiragino", "Fleshandblood", monospace, sans-serif;
    text-shadow: none;
    background-color: #000000;

    @media screen and (max-width: 850px){
      background-position: 25%;
    }
}



`
export default GlobalStyle;