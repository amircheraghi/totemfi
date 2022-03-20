import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

export const Theme = ThemeProvider;

export const GlobalStyle = createGlobalStyle`

    body {
        width:100%;
        font-family: ${(props) => props.theme.mainFont};
        font-weight: normal;
        font-size: 16px;
        line-height: 0px;
        color: ${(props) => props.theme.mainFontColor};
        background: ${(props) => props.bodyBg};
        background-image: url('/assets/background.svg');
        background-repeat: no-repeat;
        margin: 0; padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a, a:link, a:visited,
    a:hover, a:active {
        text-decoration: none;
    }
    
    p a, p a:link, p a:visited {
        color: ${(props) => props.theme.cyan};
    }
    
    *:focus {
        outline: none;
    }
`;

export const Wrapper = styled.div`
    margin: 0 30px;
`;
