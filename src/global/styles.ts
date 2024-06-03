import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings: "slnt" 0;
    }

    body {
        background-color: #44475A;
    }
`;