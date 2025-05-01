import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --color-primario: white;
        --color-secundario: red;
        --color-terciario: blue;
        --color-cuaternario: black;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
        
        
    }
        

    li{
        list-style: none;
    }

    a{
       text-decoration: none;


    }

`;
