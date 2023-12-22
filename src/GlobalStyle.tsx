import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary}
    }
    
    p {
        font-size: ${props => props.theme.fontSizes.paragraph};
    }
`