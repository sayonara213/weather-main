import {createGlobalStyle, ThemeProvider} from "styled-components";
import main from "../assets/fonts/AmsiProNormal-Bold.ttf"
import {normalize} from "./normalize";

    export const COLORS ={
        background: "#eaecef",
        text: "#202b3b",
        white: "#f5f5f5",
        grey: "#9399a2"
    }

    export const FONT_SIZE = {
        small: "16px",
        medium: "20px",
        large: "30px",
        temperature: "70px"
    }

    export const FONT_WEIGHT = {
        light: "300",
        normal: "400",
        bold: "700"
    }

    export const BORDER_RADIUS = {
        small: "5px",
        medium: "15px",
        large: "20px",
    }

    export const theme = {
        colors: COLORS,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        borderRadius: BORDER_RADIUS
    }

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "bold";
    src: url(${main});
  }
  ${normalize}

  body {
    min-width: fit-content;
  }
`;

export const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

