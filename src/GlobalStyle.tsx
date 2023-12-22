import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Figtree', sans-serif;
        background-color: ${props => props.theme.colors.primary};
        font-weight: ${props => props.theme.fontWeights.semiBold};
        font-size: ${props => props.theme.fontSizes.basic};
    }
`