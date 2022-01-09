import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from './foundations'

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    html {
        font-size: 62.5%;
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    body {
        background-color: ${colors.color.whiteVet};
        font-family: ${fonts.primaryFont};
        color: ${colors.color.navyVet};
        min-height: 100vh;
        scrollbar-color: rgba(0, 0, 0, .5) rgba(0, 0, 0, 0);
        scrollbar-width: thin;
    }

    
    @media(min-width:375px) {
        body {
        font-size: 1.4rem;
        }
    }
    @media(min-width:410px) {
        body {
        font-size: 1.6rem;
        }
    }

    /* @media(min-width:410px) {
        font-size: 1.04em;
    }
    @media(min-width:1200px) {
        font-size: 1em;
    } */

    main {
        display: block;    
    }

    img {
        border-style: none;
        display: block;
        line-height:0
    }

    button,
    select { /* 1 */
        text-transform: none;
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    [hidden] {
        display: none;
    }

    body::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    body::-webkit-scrollbar:vertical {
        width:10px;
        background: #1F1F24;
    }

    body::-webkit-scrollbar-button:increment,
    body::-webkit-scrollbar-button {
        display: none;
    }
     
    body::-webkit-scrollbar:horizontal {
        height: 10px;
        background: #1F1F24;
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${colors.color.darkVet};
        border-radius: 20px;
    }

    body::-webkit-scrollbar-track {
        border-radius: 10px;  
    }

`

export default GlobalStyle