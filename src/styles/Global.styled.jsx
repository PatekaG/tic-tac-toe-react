import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        //NEED HELP WITH THIS !!!
        ${(props) => props.theme.size.media.mobile} {
            font-size: 14px;
        }
    }
    body {
        background-color: ${(props) => props.theme.colors.primary};
    }
`;
