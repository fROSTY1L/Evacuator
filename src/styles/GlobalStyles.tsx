import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
    .unselectable {
    -webkit-touch-callout: none; 
    -webkit-user-select: none;   
    -khtml-user-select: none;    
    -moz-user-select: none;      
    -ms-user-select: none;  
    }
`

export default GlobalStyles